// src/components/Login.js
import { ComplexNavbar } from '../Shared/Header';
import { FooterWithSitemap } from '../Shared/Footer';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-backWhitelm dark:bg-blackbg">
     {/*<ComplexNavbar /> Inclua seu componente ComplexNavbar aqui */}
    <div className="mt-20 mb-10 bg-white dark:bg-blacklg rounded-lg shadow-lg p-8 max-w-sm mx-auto">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
          Entrar
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          Ainda não tem uma conta?
          <a
            className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 ml-1"
            href="/signup"
          >
            Cadastre-se aqui
          </a>
        </p>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white dark:bg-blacklg text-gray-800 shadow-sm hover:bg-backWhitelm dark:hover:bg-blackbg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        >
          <svg
            className="w-4 h-auto"
            width={46}
            height={47}
            viewBox="0 0 46 47"
            fill="none"
          >
            <path
              d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
              fill="#4285F4"
            />
            <path
              d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
              fill="#34A853"
            />
            <path
              d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
              fill="#FBBC05"
            />
            <path
              d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
              fill="#EB4335"
            />
          </svg>
          Entrar com Google
        </button>
        <div className="py-3 flex  items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          Ou
        </div>
        {/* Formulário */}
        <form>
          <div className="grid gap-y-4">
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
                  className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:bg-blacklg dark:focus:ring-neutral-600"
                  required={true}
                  placeholder='nome@gmail.com'
                  aria-describedby="email-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                Por favor, inclua um endereço de email válido para que possamos entrar em contato
              </p>
            </div>
            {/* Fim do Grupo de Formulário */}
            {/* Grupo de Formulário */}
            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Senha
                </label>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                  href="/recovery"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="py-3 px-4 block w-full border dark:bg-blacklg border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required={true}
                  placeholder="********"
                  aria-describedby="password-error"
                />
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                São necessários 8+ caracteres
              </p>
            </div>
            {/* Fim do Grupo de Formulário */}
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition-all disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-gray-800"
            >
              Entrar
            </button>
          </div>
        </form>
        {/* Fim do Formulário */}
      </div>
    </div>
    {/*Qaundo tivermos um logo, iremos substituir o text pelo logo*/}
    <Link to="../">
        <h2 className='hover:text-light-blue-600'>Moz Educa</h2>
      </Link>
      {/*<FooterWithSitemap /> Inclua seu componente FooterWithSitemap aqui */}
  </div>
);

export default Login;
