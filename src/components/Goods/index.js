import { memo, useEffect } from "react";
import { getImageURL } from "../../utils/img.ts";
import cn from "../../utils/classnames.ts";
import { MdOutlineStar } from "react-icons/md";
import "./style.css";

function Goods({ list, addToCart, dispatchAction, lang }) {
  const className = "Goods";
  return (
    <div className={className}>
      <div className={cn(className, "title")}>{lang == 'rus' ? 'Наушники' : 'Headphones'}</div>
      <div className={cn(className, "wired-headphones")}>
        {list[0].headphones.map((item) => (
          <div className={cn(className, "headphones")}>
            <img
              className={cn(className, "headphones-pic")}
              src={getImageURL(item.img)}
              alt="headphones-pic"
            />
            <div className={cn(className, "info")}>
              <div className={cn(className, "field")}>
                <div className={cn(className, "good-title")}>{item.title}</div>
                <div className={cn(className, "good-price")}>
                  {item.price.toLocaleString("ru")} ₽
                </div>
              </div>
              <div className={cn(className, "field")}>
                <div className={cn(className, "good-rate")}>
                  <MdOutlineStar color="#FFCE7F" size="23.33px" /> {item.rate}
                </div>
                <div className={cn(className, "button")}>
                  {item.oldPrice && (
                    <div className={cn(className, "good-old-price")}>
                      {item.oldPrice.toLocaleString("ru")} ₽
                    </div>
                  )}
                  <button
                    onClick={() => {
                      dispatchAction(addToCart(item));
                    }}
                  >
                    {lang == 'rus' ? 'Купить' : 'Buy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={cn(className, "title")}>{lang == 'rus' ? 'Беспроводные наушники' : 'Wireless headphones'}</div>

      <div className={cn(className, "wireless-headphones")}>
        {list[0].wirelessHeadphones.map((item) => (
          <div className={cn(className, "headphones")}>
            <img
              className={cn(className, "headphones-pic")}
              src={getImageURL(item.img)}
              alt="headphones-pic"
            />
            <div className={cn(className, "info")}>
              <div className={cn(className, "field")}>
                <div className={cn(className, "good-title")}>{item.title}</div>
                <div className={cn(className, "good-price")}>
                  {item.price.toLocaleString("ru")} ₽
                </div>
              </div>
              <div className={cn(className, "field")}>
                <div className={cn(className, "good-rate")}>
                  <MdOutlineStar color="#FFCE7F" size="23.33px" /> {item.rate}
                </div>
                <div className={cn(className, "button")}>
                  {item.oldPrice && (
                    <div className={cn(className, "good-old-price")}>
                      {item.oldPrice.toLocaleString("ru")} ₽
                    </div>
                  )}
                  <button
                    onClick={() => {
                      dispatchAction(addToCart(item));
                    }}
                  >
                    {lang == 'rus' ? 'Купить' : 'Buy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Goods);
