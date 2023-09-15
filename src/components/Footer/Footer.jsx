import "./Footer.css";
import { default as IGlogo } from "@assets/svg/instagram.svg";
import { default as FBlogo } from "@assets/svg/facebook.svg";
import { default as VKlogo } from "@assets/svg/vk.svg";

const Footer = () => (
  <footer className="footer container">
    <p className="footer__text color_gray_300">Наши социальные сети</p>
    <ul className="footer__socials">
      <li className="footer__socials__item">
        <IGlogo />
        <a className="link" href="https://www.instagram.com/snp.agency/">
          instagram
        </a>
      </li>
      <li className="footer__socials__item">
        <FBlogo />
        <a className="link" href="http://snp.agency">
          facebook
        </a>
      </li>
      <li className="footer__socials__item">
        <VKlogo />
        <a className="link" href="https://vk.com/snp.agency">
          vkontakte
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
