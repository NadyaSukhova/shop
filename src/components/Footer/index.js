import { memo } from "react";
import { useEffect } from "react";
import cn from "../../utils/classnames.ts";
import { TfiWorld } from "react-icons/tfi";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

function Footer({ changeLang, dispatchAction, lang }) {
  const className = "Footer";

  useEffect(() => {
    if (
      document.getElementsByClassName("Footer-field-language")[0].style.color ==
      document.getElementsByClassName("Footer-field-language")[1].style.color
    )
      dispatchAction(changeLang(lang));
  });
  return (
    <div className={className}>
      <div className={cn(className, "title")}> <Link to="/shop">QPICK</Link></div>
      <div className={cn(className, "info")}>
        <div className={cn(className, "fields")}>
          <div className={cn(className, "field-column")}>
            <div className={cn(className, "field-text")}>
              {lang == "rus" ? "Избранное" : "Favorites"}
            </div>
            <div className={cn(className, "field-text")}>
              {" "}
              <Link to="/cart">{lang == "rus" ? "Корзина" : "Cart"}</Link>
            </div>
            <div className={cn(className, "field-text")}>
              {lang == "rus" ? "Контакты" : "Contacts"}
            </div>
          </div>
          <div className={cn(className, "field-column")}>
            <div className={cn(className, "field-text")}>
              {lang == "rus" ? "Условия сервиса" : "Terms of service"}
            </div>
            <div className={cn(className, "field-text")}>
              <div className={cn(className, "field-languages")}>
                <TfiWorld color="#838383" size="20px" />{" "}
                <div
                  className={cn(className, "field-language")}
                  onClick={() => dispatchAction(changeLang("rus"))}
                >
                  Рус
                </div>{" "}
                <div
                  className={cn(className, "field-language")}
                  onClick={() => dispatchAction(changeLang("eng"))}
                >
                  Eng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(className, "cites")}>
        <SlSocialVkontakte color="#101010" size="30.1px" />
        <RiTelegramLine color="#101010" size="30.1px" />
        <FaWhatsapp color="#101010" size="30.1px" />
      </div>
    </div>
  );
}

export default memo(Footer);
