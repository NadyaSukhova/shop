import { memo, useCallback } from "react";
import PageLayout from "../../components/page-layout";
import Head from "../../components/Head";
import Footer from "../../components/Footer";
import CartGoods from "../../components/Cart-Goods/index.js";
import Good from "../../components/Good/index.js";
import cartAmount from "../../utils/cartAmount.ts";
import { changeLang } from "../../store/language/actions";
import { addToCart, deleteGoodCart } from "../../store/cart/actions";
import { deleteFromCart } from "../../store/cart/actions";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const lang = useSelector((state) => state.lang.lang);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const dispatchAction = useCallback((action) => dispatch(action), [dispatch]);
  const amountCart = useSelector((state) => state.cart.goods);
  const amountFav = useSelector((state) => state.favorite.goods).length;
  const goodsList = (
    <>
      {cart.goods.map((item) => (
        <Good
          dispatchAction={dispatchAction}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
          deleteGoodCart={deleteGoodCart}
          item={item}
        />
      ))}
    </>
  );
  return (
    <PageLayout
      head={
        <Head
          title="QPICK"
          amountFav={amountFav}
          amountCart={cartAmount(amountCart)}
        />
      }
      body={<CartGoods goodsList={goodsList} cart={cart} lang={lang} />}
      footer={
        <Footer
          changeLang={changeLang}
          dispatchAction={dispatchAction}
          lang={lang}
        />
      }
    />
  );
}

export default memo(Cart);
