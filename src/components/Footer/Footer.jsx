import "./Footer.css";

const socials = [
  { label: "telegram", href: "https://t.me/yourtour" },
  { label: "vkontakte", href: "https://vk.com/yourtour" },
  { label: "instagram", href: "https://www.instagram.com/yourtour/" },
];

const Footer = () => (
  <footer className="footer container">
    <p className="footer__text color_gray_300">Наши социальные сети</p>
    <ul className="footer__socials">
      {socials.map(({ label, href }) => (
        <li key={label} className="footer__socials__item">
          <a className="link" href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;