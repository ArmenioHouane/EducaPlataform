// src/components/Login.js

const Recovery = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-backWhitelm dark:bg-blackbg">
     {/*<ComplexNavbar /> Inclua seu componente ComplexNavbar aqui */}
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
          Recuperar Senha
        </h2>
        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seu email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nome@gmail.com"
              required={true}
            />
          </div>
         
          {/*<div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required={true}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="newsletter"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                Eu aceito os{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Termos e Condições
                </a>
              </label>
            </div>
          </div>*/}
          <button
            type="submit"
            className="w-full text-white bg-bgHoverlm hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Recuperar senha
          </button>
          <div className="text-center">
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                  href="/login"
                >
                  Esqueceu a senha?
                </a>
              </div>
        </form>
      </div>
    </div>
     {/*<FooterWithSitemap /> Inclua seu componente FooterWithSitemap aqui */}
  </div>
);

export default Recovery;
