import React from 'react';

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-backdarkdm">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Conhecimento em Foco: Capacitando através da Tecnologia e Inovação
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Aqui na Pro Mindset, focamos em mercados onde a tecnologia, a inovação e o conhecimento podem desbloquear valor a longo prazo e impulsionar o crescimento intelectual e profissional.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Starter Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold"> Básico </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Melhor para iniciantes e aprendizado individual.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$10</span>
              <span className="text-gray-500 dark:text-gray-400">/mês</span>
            </div>
            {/* Features List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span> Pacote Individual </span>
              </li>
              {/* Add more features as needed */}
            </ul>
            <a
              href="/checkout"
              className="text-white bg-darkbtncolorlm hover:font-bold dark:hover:font-bold hover:bg-bgHoverlm  dark:bg-darkbtncolordm dark:hover:bg-bgHoverlm
            focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
            >
              Comece agora!
            </a>
          </div>
          {/* Company Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Ideal para estudantes dedicados e projetos avançados.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400">/mês</span>
            </div>
            {/* Features List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Pacote Individual</span>
              </li>
              {/* Add more features as needed */}
            </ul>
            <a
              href="/checkout"
              className="text-white bg-primary-600 hover:font-bold dark:hover:font-bold dark:bg-darkbtncolordm bg-darkbtncolorlm hover:bg-bgHoverlm dark:hover:bg-bgHoverlm focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
            >
              Comece agora!
            </a>
          </div>
          {/* Enterprise Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Perfeito para profissionais e uso corporativo avançado.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$49</span>
              <span className="text-gray-500 dark:text-gray-400">/mês</span>
            </div>
            {/* Features List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Pacote Individual </span>
              </li>
              {/* Add more features as needed */}
            </ul>
            <a
              href="checkout"
              className="text-white bg-primary-600 hover:font-bold dark:hover:font-bold dark:bg-darkbtncolordm bg-darkbtncolorlm hover:bg-bgHoverlm dark:hover:bg-bgHoverlm focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
            >
             Comece agora!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
