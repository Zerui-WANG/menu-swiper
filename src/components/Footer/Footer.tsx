const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/cart"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Cart
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
