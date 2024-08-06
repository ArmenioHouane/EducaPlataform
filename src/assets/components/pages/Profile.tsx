import { useFormik } from "formik";
import * as Yup from "yup";

import { ComplexNavbar } from "../Shared/Header";
import { FooterWithSitemap } from "../Shared/Footer";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { authentication } from "../../../firebase/config";
import React from "react";

interface Countrie {
    name: string,
    dial_code: string,
    code: string,
    icon: string
}


const Profile: React.FC = () => {

    const [user, setUser] = useState<User | null>(null);
    const [countries, setCountries] = useState<Countrie[]>([]);


    React.useEffect(() => {

        //Funcao para verificar s e o usuario esta autenticado
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setUser(user);
                console.log(user);

            } else {
                console.log("nao conectado");
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

    const formik = useFormik({
        initialValues: {
            email: user != null ? user.email : '',
            nome: 'ghjgh',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            nome: Yup.string().required('Required')
        }),
        onSubmit: () => {

        }
    });

    return (
        <div className="dark:bg-backdarkl w-fullm relative">
            <ComplexNavbar user={user} />

            <div className="p-14">
                <div className="dark:bg-cardColorbm bg-cardColorlm shadow-md px-8 py-6 rounded-lg border border-gray-300 p-4 mt-14 w-full m-0 box-border">
                    <h2 className="dark:text-whitextdm text-textWhitelm mb-4">Dados Pessoais</h2>

                    <div className="img">
                        {
                            <img src={user != null ? user.photoURL != null ? user.photoURL : '' : ''} />
                        }
                    </div>
                    <div className="mt-12">
                        <h2 className="dark:text-whitextdm text-textWhitelm font-bold">Autenticação de dois fatores</h2>
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

