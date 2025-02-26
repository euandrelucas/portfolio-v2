import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/andretpaiva",
      icon: "/icons/linkedin.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/euandrelucas",
      icon: "/icons/github.svg",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">André Paiva</p>
            <p className="text-sm text-blue-200">Desenvolvedor Full Stack</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <Image
                  src={social.icon || "/placeholder.svg"}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} André Paiva. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
