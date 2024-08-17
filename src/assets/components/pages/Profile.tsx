import { useFormik } from "formik";
import * as Yup from "yup";

import { ComplexNavbar } from "../Shared/Header";
import { FooterWithSitemap } from "../Shared/Footer";
import { ChangeEvent, useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile, User } from "firebase/auth";
import { authentication, storage } from "../../../firebase/config";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Shared/Loader";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface Countrie {
    name: string,
    dial_code: string,
    code: string,
    icon: string
}


const Profile: React.FC = () => {

    const [user, setUser] = useState<User | null>(null);
    const [countries, setCountries] = useState<Countrie[]>([]);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [isLoading, setLoadingState] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState<String>('Loading...');


    function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function onFullNameChange(e: ChangeEvent<HTMLInputElement>) {
        setFullName(e.target.value)
    }

    function closeLoader() {
        setLoadingState(false);
        setLoadingMessage('Loading...');
    }

    function openLoader(message: String) {
        setLoadingState(true);
        setLoadingMessage(message);
    }

    function onImageURLChange(e: ChangeEvent<HTMLInputElement>) {
        //setImageUrl(e.target.value)
        openLoader("Preparando a imagem")
        const file = e.target.files[0];
        //setImageUrl(URL.createObjectURL(e.target.files[0]));
        if (file) {

            if (file.size > 1048576) {
                alert('O arquivo é muito grande. Por favor, selecione um arquivo menor que 1 MB.');
                closeLoader();
                return
            }
            const storageReference = ref(storage, 'profile/' + user?.uid + '.' + file.type)
            openLoader("Carregando a imagem");
            uploadBytes(storageReference, file).then((snapshot) => {
                openLoader("obtendo a url");
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        openLoader("Deixando tudo pronto para si");
                        updateProfile(user, {
                            photoURL: url
                        }).then(() => {
                            setImageUrl(url)
                            closeLoader();
                        }).catch((error) => {
                            closeLoader();
                            console.log("Ocoreu um erro ao atualizar a url da imagem" + error.message);
                        });
                    }).catch((error) => {
                        closeLoader();
                        console.log("Ocoreu um erro ao obter a url de download" + error.message);
                    });
                /**/
            }).catch((error) => {
                console.log("Ocoreu um erro ao carregar a imagem" + error.message);
                closeLoader();
            });
        } else {
            closeLoader();
        }

    }

    const buttonStyle = "dark:bg-darkbtncolordm bg-darkbtncolorlm border-solid  dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 mt-3 "

    React.useEffect(() => {

        //Funcao para verificar s e o usuario esta autenticado
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setUser(user);
                setImageUrl(user.photoURL)
                setEmail(user.email)
                setFullName(user.displayName)
            } else {
                setUser(null)
                //navigate("/");
            }
        });

        const fetchData = async () => {
            try {
                const response = await fetch('./json/CountryCodes.json');
                const jsonData = await response.json();
                const sortedData = jsonData.sort((a: Countrie, b: Countrie) => a.dial_code > b.dial_code ? 1 : -1);
                setCountries(sortedData);
            } catch (error) {
                alert(error);
            }
        }
        fetchData();

    }, []);

    function updateName() {
        setLoadingState(true)
        setLoadingMessage("Atualizando o nome, por favor aguarde")
        updateProfile(user, { displayName: fullName })
            .then(() => {
                setFullName(user?.displayName)
                setLoadingState(false)
                setLoadingMessage("Loading")
            })
            .catch((error) => {
                console.log('Erro ao atualizar o nome do usuário: ', error);
                setLoadingState(false)
                setLoadingMessage("Loading")
            });
    }

    function resetNameField() {
        setFullName(user?.displayName);
    }
    

    return (
        <div className="dark:bg-backdarkl w-fullm relative">
            {isLoading ? <Loader message={loadingMessage} /> : ''}
            <ComplexNavbar user={user} />

            <div className="p-14">
                <div className="dark:bg-cardColorbm bg-cardColorlm shadow-md px-8 py-6 rounded-lg border border-gray-300 p-4 mt-14 w-full m-0 box-border">
                    <h2 className="dark:text-whitextdm text-textWhitelm mb-4 font-black">Dados Pessoais</h2>

                    <div className="img">
                        <h4>Imagem</h4>
                        <label htmlFor="user-image" className="w-52">
                            {
                                <img src={imageUrl != null ? imageUrl : ''} className="w-52 h-52 rounded-lg" />
                            }
                        </label>
                        <span>A imagem deve ter um tamanho máximo de 1MB</span>
                        <div className="flex gap-2">
                            <button
                                className=" bg-transparent border-solid border-2 dark:text-darkinnercolorlm hover:bg-darkbtncolorlm border-cyan-400 
                                    text-darkinnercolordm hover:border-darkbtncolorlm  dark:hover:bg-bgHoverlm px-4 py-1 mt-3 "
                            >
                                Remover
                            </button>

                            <label
                                className={buttonStyle}
                                htmlFor="user-image"
                            >
                                {user?.photoURL == null ? "Carregar" : "Alterar"}
                            </label>
                            <input
                                onChange={onImageURLChange}
                                type="file" name="user-image" id="user-image" accept="image/*"

                                className="dark:bg-darkbtncolordm bg-darkbtncolorlm border-solid  dark:text-darkinnercolordm hidden text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 mt-3 "
                            />
                        </div>
                    </div>

                    <div className="mt-12">

                        {/* Grupo de Formulário */}
                        <div>
                            <label
                                htmlFor="nome"
                                className="block text-sm mb-2  dark:text-white w-fit"
                            >
                                Nome completo
                            </label>
                            <div className="relative">
                                <input
                                    type="nome"
                                    id="nome"
                                    name="nome"
                                    className="py-3 px-4 block w-fit border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:bg-blacklg dark:focus:ring-neutral-600"
                                    required={true}
                                    value={fullName}
                                    onChange={onFullNameChange}
                                    placeholder='Helder'
                                    aria-describedby="email-error"
                                />
                                <div className="flex gap-2">
                                    {user?.displayName != fullName ? <button
                                        className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 rounded-md mt-3" onClick={resetNameField} disabled
                                    >
                                        Cancelar
                                    </button> : ''}
                                    {user?.displayName != fullName ? <button
                                        className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 rounded-md mt-3 disabled:bg-blue-gray-600" onClick={updateName}
                                        disabled={user?.emailVerified ? true : false}
                                    >
                                        Alterar
                                    </button> : ''}
                                </div>

                            </div>
                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                Por favor, inclua um endereço de email válido para que possamos entrar em contato
                            </p>
                        </div>
                        {/* Fim do Grupo de Formulário */}

                    </div>

                    <div className="mt-12">
                        {/* Grupo de Formulário */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm mb-2  dark:text-white"
                            >
                                Endereço de email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="py-3 px-4 block w-fit border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:bg-blacklg dark:focus:ring-neutral-600"
                                    required={true}
                                    value={email}
                                    onChange={onEmailChange}
                                    placeholder='nome@gmail.com'
                                    aria-describedby="email-error"
                                />
                            </div>
                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                Por favor, inclua um endereço de email válido para que possamos entrar em contato
                            </p>

                            <div className="flex gap-2">
                                <button
                                    className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 rounded-md mt-3 "
                                >
                                    {user?.emailVerified ? "Verificado" : "Verificar"}
                                </button>

                                <button
                                    className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 rounded-md mt-3 "
                                    disabled
                                >
                                    Alterar
                                </button>
                            </div>

                        </div>
                        {/* Fim do Grupo de Formulário */}
                    </div>

                    <div className="mt-12">
                        <h3 className="dark:text-whitextdm text-textWhitelm font-bold">Autenticação de dois fatores</h3>
                        <p className="dark:text-innerTextColordm text-innerTextColorlm text-justify max-w-2xl my-3">
                            A autenticação de dois fatores coloca uma camada adicional de segurança em sua conta. Sempre que você entrar, deverá digitar um código único disponível apenas no seu telefone celular. Essa proteção extra garante que você seja o único a acessar sua conta e seus cursos.
                        </p>
                        <button className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm px-4 py-1 rounded-md mt-3 ">Habilitar 2AF</button>
                    </div>
                </div>
            </div>

            <FooterWithSitemap />
        </div>
    )
}

export default Profile;

