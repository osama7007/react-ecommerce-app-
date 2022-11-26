import style from "./ProductCard.module.css";
import ButtonStyle from "../button";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../redux/wishListSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({product , navigation , wishlistBool}) => {
  const {isAuth} = useSelector(stete=> stete.auth); //check auth
  const dispatch = useDispatch();
  const addToCartHandler = ()=>{
    if (isAuth){
      dispatch(addToCart(product));
      toast.success('Added to cart', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    }
    else{
      toast.error('can not proceed must log in ', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    } 
  }
  const addToWishListHandler = ()=>{
    if (isAuth){
      dispatch(addToWishList(product));
      toast.success('Added to wishlist', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    }
    else{
      toast.error('can not proceed must log in ', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    } 
  }
  return (
    <div className={`${style.card_wrapper} `}>
      <div className={`${style.img_wrapper} pointer mb-2`} onClick={navigation} >
        <img src={product.img} alt="ProductIMG" className="w-100" />
      </div>
      <h5 className="mb-2">{product.title}</h5>
      <p>{product.price} EG</p>
      <p className="overflow-hidden">{product.description}</p>
      <div className="btn_wrapper d-flex gap-5 align-items-center justify-content-center">
      <ButtonStyle btntitle={"Add cart"} action={()=>addToCartHandler()} />
      {!wishlistBool && <ButtonStyle btntitle={"Add wishlist"} action={()=>addToWishListHandler() } />}
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  )
}

export default ProductCard