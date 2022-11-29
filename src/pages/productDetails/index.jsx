import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ButtonStyle from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../redux/wishListSlice";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./ProductDetails.module.scss";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const {isAuth} = useSelector(stete=> stete.auth); //check auth
  const dispatch = useDispatch();

  const getProduct = () => {
    fetch(`http://localhost:3005/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    console.log('product' , product);
  };
  useEffect(() => {
    getProduct();
  }, []);
 // handle cart and wishlist
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
      // animate component
      const animations = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
        transition: { delay: 0.5 },
        duration: 5,
      }
  return (
    <motion.div {...animations}>
      { Object.keys(product).length === 0 ? (
          <Spinner/>
      ) : (
        <div className="container py-2 text-center d-flex gap-2 flex-wrap align-items-center justify-content-center">
        <div className="w-50 ">
          <img
            src={product?.img}
            alt="productIMG"
            className={` w-100 mb-3 rounded-4`}
          />
        </div>
        <div className={`${style.product_content} w-100 w-lg-50`}>
        <h5 className="text-dark m-auto mb-4 fs-4 col-6" >{product?.title}</h5>
        <p className="text-dark m-auto mb-4 fs-4 col-6">{product?.price} EG</p>
        <p className={` m-auto fs-5`}>
          {product?.description}
        </p>
        {!product.stock ? <h4 style={{color:"red"}} >Out of stock</h4> : 
      <div className="btn_wrapper d-flex gap-5 align-items-center justify-content-center">
    <ButtonStyle btntitle={"Add cart"} action={()=>addToCartHandler()} />
    { <ButtonStyle btntitle={"Add wishlist"} action={()=>addToWishListHandler() } />}
    </div>  
      } 
        </div>
      </div>
      )}
            <ToastContainer autoClose={1000}/>
    </motion.div>
  )
}

export default ProductDetails