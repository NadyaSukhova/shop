import { memo } from "react";
import cn from "../../utils/classnames.ts";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import HeadIcons from "../Head-Icons";
import "./style.css";

function Head({ title, amountFav, amountCart }) {
  const className = "Head";

  return (
    <div className={className}>
      <div className={cn(className, "title")}><Link to="/shop">{title}</Link></div>
      <div className={cn(className, "buttons")}>
        <div className={cn(cn(className, "buttons"), "favorites")}>
          <HeadIcons amount={amountFav}/>
          <FaRegHeart color="#838383" size={"22px"} />
        </div>{" "}
        <Link to="/cart">
          <div className={cn(cn(className, "buttons"), "cart")}>
            <HeadIcons amount={amountCart}/>
            <RiShoppingCart2Line color="#838383" size={"22px"} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default memo(Head);
