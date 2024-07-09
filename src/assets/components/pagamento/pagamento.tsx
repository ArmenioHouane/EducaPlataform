import { ComplexNavbar } from '../Shared/Header';
import { FooterWithSitemap } from '../Shared/Footer';

const Pagamentoconfirmado = () => {
  return (
    <div>
      <ComplexNavbar />
      <section className="bg-seaShell py-8 antialiased dark:bg-lighterNavy md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-navy dark:text-seaShell sm:text-2xl mb-2">Thanks for your order!</h2>
          <p className="text-lightNavy dark:text-platinum mb-6 md:mb-8">
            Your order <a href="#" className="font-medium text-navy dark:text-seaShell hover:underline">#7564804</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-lightNavy bg-offWhite p-6 dark:border-lighterNavy dark:bg-lightNavy mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Date</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">14 May 2024</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Payment Method</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">JPMorgan monthly installments</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Name</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">Flowbite Studios LLC</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Address</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">34 Scott Street, San Francisco, California, USA</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-lightNavy dark:text-platinum">Phone</dt>
              <dd className="font-medium text-navy dark:text-seaShell sm:text-end">+(123) 456 7890</dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-seaShell bg-slightlyDarkPink hover:bg-lightRed focus:ring-4 focus:ring-lightRed font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slightlyDarkPink dark:hover:bg-lightRed focus:outline-none dark:focus:ring-lightRed">Track your order</a>
            <a href="#" className="py-2.5 px-5 text-sm font-medium text-navy focus:outline-none bg-seaShell rounded-lg border border-lightNavy hover:bg-lightNavy hover:text-slightlyDarkPink focus:z-10 focus:ring-4 focus:ring-lightNavy dark:focus:ring-lighterNavy dark:bg-lightNavy dark:text-platinum dark:border-lighterNavy dark:hover:text-seaShell dark:hover:bg-lighterNavy">Return to shopping</a>
          </div>
        </div>
      </section>
      <FooterWithSitemap />
    </div>
  );
};

export default Pagamentoconfirmado;
