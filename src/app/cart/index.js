import { memo, useCallback } from "react";
import PageLayout from "../../components/page-layout";
import Head from "../../components/Head";
import Footer from "../../components/Footer";
import CartGoods from "../../components/Cart-Goods/index.js";
import cartAmount from "../../utils/cartAmount.ts";
import { addToCart, deleteGoodCart } from "../../store/cart/actions";
import { deleteFromCart } from "../../store/cart/actions";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const dispatchAction = useCallback((action) => dispatch(action), [dispatch]);
  const amountCart = useSelector((state) => state.cart.goods);
  const amountFav = useSelector((state) => state.favorite.goods).length;
  return (
    <PageLayout
      head={
        <Head
          title="QPICK"
          amountFav={amountFav}
          amountCart={cartAmount(amountCart)}
        />
      }
      body={
        <CartGoods
          cart={cart}
          dispatchAction={dispatchAction}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
          deleteGoodCart={deleteGoodCart}
        />
      }
      footer={<Footer />}
    />
  );
}

export default memo(Cart);
