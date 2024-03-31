import { memo, useEffect } from "react";
import cn from "../../utils/classnames.ts";
import { TfiWorld } from "react-icons/tfi";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

function Footer() {
  const { t, i18n } = useTranslation();

  const className = "Footer";

  useEffect(() => {
    var orange = 0;
    if (i18n.language == "rus") orange = 0;
    else orange = 1;
    var simple = 1 - orange;
    document.getElementsByClassName("Footer-field-language")[
      orange
    ].style.fontWeight = "700";
    document.getElementsByClassName("Footer-field-language")[
      orange
    ].style.color = "#FFA542";
    document.getElementsByClassName("Footer-field-language")[
      simple
    ].style.fontWeight = "500";
    document.getElementsByClassName("Footer-field-language")[
      simple
    ].style.color = "#101010";
  });

  return (
    <div className={className}>
      <div className={cn(className, "title")}>
        {" "}
        <Link to="/shop">QPICK</Link>
      </div>
      <div className={cn(className, "fields")}>
        <div className={cn(className, "field-column")}>
          <div className={cn(className, "field-text")}>
            {t("footer.favorites")}
          </div>
          <div className={cn(className, "field-text")}>
            <Link to="/cart">{t("cart")}</Link>
          </div>
          <div
            className={cn(className, "field-text")}
            onClick={() => {
              window.open("https://www.neoflex.ru/contacts");
            }}
          >
            {t("footer.contacts")}
          </div>
        </div>
        <div className={cn(className, "field-column")}>
          <div
            className={cn(className, "field-text")}
            onClick={() => {
              window.open("https://docs.github.com/ru/site-policy/github-terms/github-terms-of-service");
            }}
          >
            {t("footer.service")}
          </div>
          <div className={cn(className, "field-text")}  id={cn(className, "languages")}>
            <div className={cn(className, "field-languages")}>
              <TfiWorld color="#838383" size="20px" />{" "}
              <div
                className={cn(className, "field-language")}
                onClick={() => i18n.changeLanguage("rus")}
              >
                Рус
              </div>
              <div
                className={cn(className, "field-language")}
                onClick={() => i18n.changeLanguage("en")}
              >
                Eng
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(className, "cites")}>
        <SlSocialVkontakte size="30.1px"  onClick={() => {
              window.open("https://vk.com/");
            }}/>
        <RiTelegramLine size="30.1px"  onClick={() => {
              window.open("https://web.tlgrm.app/");
            }}/>
        <FaWhatsapp size="30.1px"  onClick={() => {
              window.open("https://www.whatsapp.com/?lang=ru_RU");
            }}/>
      </div>
    </div>
  );
}

export default memo(Footer);
