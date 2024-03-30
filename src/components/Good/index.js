import { memo } from "react";
import { getImageURL } from "../../utils/img.ts";
import cn from "../../utils/classnames.ts";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./style.css";

function Good({ item, dispatchAction, addToCart, deleteFromCart, deleteGoodCart }) {
  const className = "Good";
  return (
        <div className={className}>
          <div className={cn(className, "first-column")}>
            <img
              className={cn(className, "headphones-pic")}
              src={getImageURL(item.img)}
              alt="headphones-pic"
            />
            <div className={cn(className, "buttons")}>
              <div
                className={cn(className, "button")}
                onClick={() => dispatchAction(deleteFromCart(item))}
              >
                -
              </div>
              {item.amount}
              <div
                className={cn(className, "button")}
                onClick={() => dispatchAction(addToCart(item))}
              >
                +
              </div>
            </div>
          </div>
          <div className={cn(className, "second-column")}>
            <div className={cn(className, "title")}>{item.title}</div>
            <div className={cn(className, "price")}>
              {item.price.toLocaleString("ru")} ₽
            </div>
          </div>
          <div className={cn(className, "third-column")}>
          <RiDeleteBin2Line color="#DF6464" size="19.93px" onClick={() => dispatchAction(deleteGoodCart(item.id, item.price * item.amount))}/>
          <div className={cn(className, "total-price")}>
            {(item.price * item.amount).toLocaleString("ru")} ₽
          </div>
          </div>
        </div>
  );
}
export default memo(Good);
