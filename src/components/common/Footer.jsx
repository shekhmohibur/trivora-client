const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} BaseApp — All rights reserved
      </p>
    </footer>
  );
};

export default Footer;