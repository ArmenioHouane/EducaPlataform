import { useFormik } from "formik";
import * as Yup from "yup";

import { ComplexNavbar } from "../Shared/Header";
import { FooterWithSitemap } from "../Shared/Footer";


import { useEffect, useState } from "react";

interface Countrie {
    name: string,
    dial_code: string,
    code: string,
    icon: string
}

const Profile: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            nome: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            nome: Yup.string().required('Required')
        }),
        onSubmit: () => {

        }
    });

    const [countries, setCountries] = useState<Countrie[]>([]);
    useEffect(() => {
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

    return (
        <>
            <ComplexNavbar />
            <section id="profile" className="dark:bg-backdarkdm bg-backWhitelm flex gap-20">
                <div className="side-bar">
                    <ul>
                        <li className="dark:text-whitextdm text-textWhitelm bg-gray-200 dark:bg-gray-800 p-2 rounded-md mb-8">Dados Pessoais</li>
                        <li className="dark:text-whitextdm text-textWhitelm bg-gray-200 dark:bg-gray-800 p-2 rounded-md mb-8">Senhas</li>
                        <li className="dark:text-whitextdm text-textWhitelm bg-gray-200 dark:bg-gray-800 p-2 rounded-md mb-8">Contas Associadas</li>
                        <li className="dark:text-whitextdm text-textWhitelm bg-gray-200 dark:bg-gray-800 p-2 rounded-md">Subscrições</li>
                    </ul>
                </div>
                <div className="content dark:bg-cardColorbm bg-cardColorlm shadow-md px-8 py-6 rounded-lg border border-gray-300">
                    <h2 className="dark:text-whitextdm text-textWhitelm mb-4">Dados Pessoais</h2>
                    <form action="#" onSubmit={formik.handleSubmit}>

                        <div className="img">
                            {
                                (false) ? <img /> : <span className="material-symbols-outlined dark:text-whitextdm text-textWhitelm">
                                    person
                                </span>
                            }
                        </div>

                        <div className="side-by-side flex gap-10">
                            <div className='text-field'>
                                <label htmlFor="nome" className="dark:text-innerTextColordm text-innerTextColorlm">Nome Completo</label>
                                <div className="input-field">
                                    <input
                                        id="nome"
                                        type="text"
                                        {...formik.getFieldProps('nome')}
                                        className="dark:bg-cardColorbm bg-cardColorlm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2"
                                    />
                                </div>
                                {formik.touched.nome && formik.errors.nome ? (
                                    <div className='input-error text-red-500'>{formik.errors.nome}</div>
                                ) : null}
                            </div>

                            <div className='text-field'>
                                <label htmlFor="email" className="dark:text-innerTextColordm text-innerTextColorlm">Endereço de email</label>
                                <div className="input-field">
                                    <input
                                        id="email"
                                        type="email"
                                        {...formik.getFieldProps('email')}
                                        className="dark:bg-cardColorbm bg-cardColorlm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2"
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='input-error text-red-500'>{formik.errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        <button type="submit" className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm mt-4 px-4 py-2 rounded-md">Salvar</button>
                    </form>

                    <div className="splitter my-6 border-t border-gray-600"></div>

                    <form action="#">
                        <h2 className="dark:text-whitextdm text-textWhitelm mb-4">Contacto</h2>
                        <div className='text-field'>
                            <label htmlFor="nome" className="dark:text-innerTextColordm text-innerTextColorlm">Senha actual</label>
                            <div className="input-field contact relative">
                                <select name="country" id="" className="dark:bg-dropMenulbackdm bg-dropMenulbacklm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2">
                                    {countries.map(item => (
                                        <option value={item.dial_code} key={item.code} className="dark:bg-dropMenudm bg-dropMenulm">{item.dial_code}</option>
                                    ))}
                                </select>
                                <input
                                    id="nome"
                                    type="text"
                                    {...formik.getFieldProps('nome')}
                                    className="dark:bg-cardColorbm bg-cardColorlm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2 mt-2"
                                />
                            </div>
                            {formik.touched.nome && formik.errors.nome ? (
                                <div className='input-error text-red-500'>{formik.errors.nome}</div>
                            ) : null}
                        </div>
                    </form>

                    <div className="splitter my-6 border-t border-gray-600"></div>

                    <form action="">
                        <h2 className="dark:text-whitextdm text-textWhitelm mb-4">Senha</h2>
                        <div className="side-by-side flex gap-10">
                            <div className='text-field'>
                                <label htmlFor="nome" className="dark:text-innerTextColordm text-innerTextColorlm">Senha actual</label>
                                <div className="input-field">
                                    <input
                                        id="nome"
                                        type="text"
                                        {...formik.getFieldProps('nome')}
                                        className="dark:bg-cardColorbm bg-cardColorlm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2"
                                    />
                                </div>
                                {formik.touched.nome && formik.errors.nome ? (
                                    <div className='input-error text-red-500'>{formik.errors.nome}</div>
                                ) : null}
                            </div>

                            <div className='text-field'>
                                <label htmlFor="email" className="dark:text-innerTextColordm text-innerTextColorlm">Nova senha</label>
                                <div className="input-field">
                                    <input
                                        id="email"
                                        type="password"
                                        {...formik.getFieldProps('email')}
                                        className="dark:bg-cardColorbm bg-cardColorlm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2"
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='input-error text-red-500'>{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className='text-field'>
                                <label htmlFor="confirmPassword" className="dark:text-innerTextColordm text-innerTextColorlm">Confirmar senha</label>
                                <div className="input-field">
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        {...formik.getFieldProps('confirmPassword')}
                                        className="dark:bg-cardColorbm bg-cardColorlm dark:text-whitextdm text-textWhitelm border border-gray-300 rounded-md px-4 py-2"
                                    />
                                </div>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div className='input-error text-red-500'>{formik.errors.confirmPassword}</div>
                                ) : null}
                            </div>
                        </div>
                        <button type="button" className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm">Alterar senha</button>

                    </form>

                    <div className="splitter"></div>

                    <div>
                        <h2 className="dark:text-whitextdm text-textWhitelm">Autenticação de dois fatores</h2>
                        <p className="dark:text-innerTextColordm text-innerTextColorlm">
                            A autenticação de dois fatores coloca uma camada adicional de segurança em sua conta. Sempre que você entrar, deverá digitar um código único disponível apenas no seu telefone celular. Essa proteção extra garante que você seja o único a acessar sua conta e seus cursos.
                        </p>
                        <button className="dark:bg-darkbtncolordm bg-darkbtncolorlm dark:text-darkinnercolordm text-darkinnercolorlm hover:bg-bgHoverdm dark:hover:bg-bgHoverlm">Habilitar 2AF</button>
                    </div>
                </div>
            </section>
            <FooterWithSitemap />
        </>
    )
}

export default Profile;
