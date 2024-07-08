import React from 'react';
import { ComplexNavbar } from '../Shared/Header';
import { FooterWithSitemap } from '../Shared/Footer';
import Feature from './Feature';
import Pricing from './Pricing';

const Home = () => {
  return (
    <div className=" dark:bg-backdarklm">
      <ComplexNavbar />
      <div className="p-4 bg-backdarklm dark:bg-backdarkdm">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full bg-darkbtncolorlm px-3 py-1 text-sm leading-6 hover:bg-bgHoverlm dark:hover:bg-darklinkcolorlm dark:hover:text-white text-white ring-1 ring-gray-900/10">
              Venha adquirir novas habilidades.{' '}
              <a href="#" className="font-semibold text-darklinkcolorlm hover:text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Ler mais <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-textWhitelm dark:text-whitextdm sm:text-6xl">
              Transforme Seu Conhecimento em Poder
            </h1>
            <p className="mt-6 text-lg leading-8 text-textWhitelm dark:text-whitextdm">
              Explore uma plataforma educacional abrangente, projetada para impulsionar seu aprendizado em todas as áreas.
              De programação a ciências, negócios e muito mais, oferecemos recursos interativos e suporte especializado para ajudar
              você a alcançar seus objetivos educacionais. Comece sua jornada de aprendizado conosco hoje mesmo!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-darkbtncolorlm dark:bg-darkbtncolordm text-darkinnercolorlm dark:text-darkinnercolordm px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-bgHoverlm dark:hover:bg-darklinkcolorlm dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 dark:text-white dark:hover:text-bgHoverlm">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <Feature />
      <Pricing />
      <FooterWithSitemap />
    </div>
  );
};

export default Home;
