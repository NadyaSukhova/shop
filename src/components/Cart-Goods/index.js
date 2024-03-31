import { memo } from "react";
import cn from "../../utils/classnames.ts";
import { useTranslation } from 'react-i18next';
import Good from "../Good/index.js";
import "./style.css";

function CartGoods({
  cart,
  dispatchAction,
  addToCart,
  deleteFromCart,
  deleteGoodCart,
}) {
  const { t } = useTranslation();
  const className = "Cart-Goods";
  return (
    <div className={className}>
      
      <div className={cn(className, "title")}>
        {cart.goods.length != 0
          ? t('cart')
          : t('cart.empty')}
      </div>
          <Good
            dispatchAction={dispatchAction}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
            deleteGoodCart={deleteGoodCart}
            cart={cart}
          />
          <div className={cn(className, "panel")}>
        <div className={cn(className, "panel-total")}>
          <p>{t('cart.total').toUpperCase()}</p>{" "}
          <p>₽ {cart.price.toLocaleString("ru")}</p>{" "}
        </div>
        <div
          className={cn(className, "panel-button")}
          onClick={() => {
            window.location =
              "https://www.sberbank.com/ru/person/remittance/beznal_cc_rus";
          }}
        >
         {t('cart.confirm')}
        </div>
      </div>
    </div>
  );
}

export default memo(CartGoods);
