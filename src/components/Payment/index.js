import { memo, useEffect } from "react";
import cn from "../../utils/classnames.ts";
import { useTranslation } from "react-i18next";
import "./style.css";

function Payment({ cost, close }) {
  const className = "Payment";
  const { t } = useTranslation();

  const formatNumber = (number) =>
    number.split("").reduce((seed, next, index) => {
      if (index !== 0 && !(index % 4)) seed += " ";
      return seed + next;
    }, "");

  const formatDate = (number) =>
    number.split("").reduce((seed, next, index) => {
      if (index !== 0 && !(index % 2)) seed += "/";
      return seed + next;
    }, "");

  useEffect(() => {
    const cardname = document.getElementById('name');
    cardname.onkeydown = function (event) {
        if( event.key.match(/[0-9]/) ) return event.preventDefault();
      };

    const cardInput = document.getElementById("card-number");
    cardInput.addEventListener(
      "input",
      () =>
        (cardInput.value = formatNumber(cardInput.value.replaceAll(" ", "")))
    );
    cardInput.onkeydown = function (event) {
        if (isNaN(event.key) && event.key !== "Backspace") {
          event.preventDefault();
        }
      };
    const dateInput = document.getElementById("expiry-date");
    dateInput.addEventListener(
      "input",
      () => (dateInput.value = formatDate(dateInput.value.replaceAll("/", "")))
    );
    dateInput.onkeydown = function (event) {
        if (isNaN(event.key) && event.key !== "Backspace") {
          event.preventDefault();
        }
      };
    const codeInput = document.getElementById("security-code");
    codeInput.onkeydown = function (event) {
      if (isNaN(event.key) && event.key !== "Backspace") {
        event.preventDefault();
      }
    };
  });

  return (
    <div className={className}>
      <form className={cn(className, "form")}>
        <div>
          <label for="name">{t("payment.name")}</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            autocomplete="cc-name"
          />
        </div>
        <div class="card-number">
          <label>{t("payment.card")}</label>
          <input
            required
            type="text"
            id="card-number"
            name="card-number"
            placeholder="0000 0000 0000 0000"
            inputmode="numeric"
            autcomplete="cc-number"
            minlength="19"
            maxlength="19"
            pattern="[0-9]{16}"
          />
        </div>
        <div class="date-code">
          <div>
            <label for="expiry-date">{t("payment.date")}</label>
            <input
              required
              type="text"
              id="expiry-date"
              name="expiry-date"
              class="expiry-date"
              autocomplete="cc-exp"
              placeholder="MM/YY"
              minlength="5"
              maxlength="5"
              pattern="[0-9/]{4}"
            />
          </div>
          <div>
            <label for="security-code">{t("payment.code")}</label>
            <input
              required
              type="text"
              id="security-code"
              autocomplete="cc-number"
              name="security-code"
              inputmode="numeric"
              minlength="3"
              maxlength="3"
              pattern="[0-9]{3}"
            />
          </div>
        </div>
        <div className={cn(className, "buttons")}>
          <button
            className={cn(className, "button")}
            onClick={() => {
              close();
              window.open(
                "https://www.sberbank.com/ru/person/remittance/beznal_cc_rus"
              );
            }}
          >
            {t("payment.buy")} {cost} ₽
          </button>
          <button className={cn(className, "button")} onClick={close}>
          {t("payment.cancel")}
          </button>
        </div>
      </form>
    </div>
  );
}
export default memo(Payment);
