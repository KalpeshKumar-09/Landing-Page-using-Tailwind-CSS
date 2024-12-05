import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a href={link.href} key={index} target="_blank">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
