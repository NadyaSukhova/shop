import { memo, useCallback } from "react";
import PageLayout from "../components/page-layout";
import Head from "../components/Head";
import Goods from "../components/Goods";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart/actions";
import {changeLang} from "../store/language/actions";
import cartAmount from "../utils/cartAmount.ts";
import Footer from "../components/Footer";

function App() {
  const list = useSelector((state) => state.goods.list);
  const lang = useSelector((state) => state.lang.lang);
  const amountCart = useSelector((state) => state.cart.goods);
  const amountFav = useSelector((state) => state.favorite.goods).length;
  const dispatch = useDispatch();
  const dispatchAction = useCallback((action) => dispatch(action), [dispatch]);

  return (
    <PageLayout
      head={<Head title="QPICK" amountFav={amountFav} amountCart={cartAmount(amountCart)}/>}
      body={<Goods list={list} addToCart={addToCart} dispatchAction={dispatchAction} lang={lang}/>}
      footer={<Footer changeLang={changeLang} dispatchAction={dispatchAction} lang={lang}/>}
    />
  );
}

export default memo(App);
