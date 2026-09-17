export default function FooterContent({ dict }) {
  return (
    <footer className="max-w-7xl w-full mt-8 text-gray-600">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Reme Rubio. {dict.footer.rights}</p>
          </div>
          <div className="text-center md:text-right">
            <p>{dict.footer.contact} consulta@remerubio.com</p>
            <p>{dict.footer.phone} +34 654 023 745</p>
            <p>{dict.footer.address} {dict.footer.addressValue}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
