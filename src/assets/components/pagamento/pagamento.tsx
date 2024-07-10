import { ComplexNavbar } from '../Shared/Header';
import { FooterWithSitemap } from '../Shared/Footer';

const Pagamentoconfirmado = () => {
  return (
    <div>
      <ComplexNavbar />
      <section className="bg-seaShell py-8 antialiased dark:bg-cardColorbm md:py-16 ">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0 mt-10">
          <h2 className="text-xl font-semibold text-navy dark:text-seaShell sm:text-2xl mb-2">Obrigado pelo seu pedido!</h2>
          <p className="text-lightNavy dark:text-platinum mb-6 md:mb-8">
          Seu pedido <a href="#" className="font-medium text-navy dark:text-seaShell hover:underline">#10804</a> será processado dentro de 24 horas durante os dias úteis. Nós o notificaremos por e-mail assim que seu pagamento for confirmado.
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-lightNavy bg-offWhite p-6 dark:border-lighterNavy dark:bg-lightNavy mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Data</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">14 de Julho 2024</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Método de Pagamento</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">Mpesa</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Nome</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">Ana Carla</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Endereço</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">Av. 24 de Julho, Maputo, Mocambique</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Telefone</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">+(258) 456 7890</dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-seaShell bg-slightlyDarkPink hover:bg-linkdm focus:ring-4 focus:ring-linkdm font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slightlyDarkPink dark:hover:bg-linkdm focus:outline-none dark:focus:ring-lightRed">Verificar detalhes do pedido</a>
            <a href="/cursos" className="py-2.5 px-5 text-sm font-medium text-navy focus:outline-none bg-seaShell rounded-lg border border-lightNavy hover:bg-lightNavy 
            hover:text-slightlyDarkPink focus:z-10 
            focus:ring-4 focus:ring-lightNavy 
            dark:focus:ring-lighterNavy dark:bg-lightNavy
             dark:text-platinum dark:border-lighterNavy
              dark:hover:text-seaShell 
              dark:hover:bg-lighterNavy">Voltar aos cursos</a>
          </div>
        </div>
      </section>
      <FooterWithSitemap />
    </div>
  );
};

export default Pagamentoconfirmado;
