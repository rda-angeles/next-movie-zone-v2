const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="bg-c-primary h-8 text-c-white flex items-center justify-center text-white">
      <p className="text-[.6rem]">
        © {getYear} Movie<span className="text-c-tertiary">Zone</span>
      </p>
    </div>
  );
};

export default Footer;
