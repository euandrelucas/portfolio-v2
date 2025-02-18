import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/andretpaiva" }, // Substitua pelo seu link
    { name: "GitHub", link: "https://github.com/euandrelucas" }, // Substitua pelo seu link
  ];

  return (
    <>
      <footer className="bg-blue-500 text-white p-5 text-center mt-10 shadow-md">
        <div className="flex justify-center space-x-6 mb-4">
          {" "}
          {/* Container para os ícones */}
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              {/* Você pode usar ícones de bibliotecas como Font Awesome ou Heroicons */}
              {social.name === "LinkedIn" && (
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              )}
              {social.name === "GitHub" && (
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={30}
                  height={30}
                />
              )}
              {social.name === "Twitter" && (
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              )}
              {/* Adicione ícones para as outras redes sociais */}
            </a>
          ))}
        </div>
        © {new Date().getFullYear()} André Paiva. Todos os direitos reservados.
      </footer>
    </>
  );
};

export default Footer;