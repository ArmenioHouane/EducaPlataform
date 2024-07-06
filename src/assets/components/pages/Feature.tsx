import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Stream de aulas seguras',
    description:
      'Garanta a segurança durante a transmissão das suas aulas. Gerencie certificados SSL e mantenha seus dados protegidos.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Autenticação robusta',
    description:
      'Assegure a integridade dos seus dados com autenticação avançada. Proteja suas informações com segurança de ponta a ponta.',
    icon: LockClosedIcon,
  },
  {
    name: 'Interface intuitiva',
    description:
      'Desenvolvemos uma plataforma simples de usar para que você se concentre no que realmente importa. Navegue pelo dashboard facilmente.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Dashboard completo',
    description:
      'Acesse todas as informações essenciais em um único lugar. Nosso dashboard oferece uma visão completa e atualizada do seu projeto.',
    icon: FingerPrintIcon,
  },
];

const Feature = () => {
  return (
    <div className="dark:bg-backdarkdm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Stream de aulas seguras</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Tudo que você precisa para transmitir suas aulas com segurança
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Garanta a segurança dos seus dados e a facilidade de uso com nossa plataforma. Acesse o dashboard completo e gerencie tudo em um só lugar.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 dark:text-indigo-600 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
