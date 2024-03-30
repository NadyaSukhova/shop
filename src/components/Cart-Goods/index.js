import { memo } from "react";
import { getImageURL } from "../../utils/img.ts";
import cn from "../../utils/classnames.ts";
import { RiDeleteBin2Line } from "react-icons/ri";
import Good from "../Good/index.js";
import "./style.css";

function CartGoods({
  cart,
  lang,
  dispatchAction,
  addToCart,
  deleteFromCart,
  deleteGoodCart,
}) {
  const className = "Cart-Goods";
  return (
    <div className={className}>
      
      <div className={cn(className, "title")}>
        {cart.goods.length != 0
          ? lang == "rus"
            ? "Корзина"
            : "Cart"
          : lang == "rus"
          ? "Корзина пустая :("
          : "Cart is empty :("}
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
          <p>{(lang == "rus" ? "итого" : "total").toUpperCase()}</p>{" "}
          <p>₽ {cart.price.toLocaleString("ru")}</p>{" "}
        </div>
        <div
          className={cn(className, "panel-button")}
          onClick={() => {
            window.location =
              "https://www.sberbank.com/ru/person/remittance/beznal_cc_rus";
          }}
        >
          {lang == "rus" ? "Перейти к оформлению" : "Make a purchase"}
        </div>
      </div>
    </div>
  );
}

export default memo(CartGoods);
