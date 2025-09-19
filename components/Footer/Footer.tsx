const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-24 px-6 md:px-20 text-2xl lg:text-3xl bg-bg-dark text-bg-text-less-dark">
      <div className="text-center md:text-left">
        Copyright © 2025{" "}
        <span className="text-primary font-semibold">Zitouni</span>. All Rights
        Reserved.
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        <Link href="/privacy-policy">
          <span className="cursor-pointer hover:text-primary transition">
            Privacy Policy
          </span>
        </Link>
        <span className="cursor-pointer hover:text-primary transition">
          Disclaimer
        </span>
      </div>
    </div>
  );
};

export default Footer;
