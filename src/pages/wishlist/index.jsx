import React from 'react'
import ProductCard from '../../components/producrCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll } from '../../redux/wishListSlice';
import Lottie from "react-lottie";
import wishLottie from "../../assets/lottieFiles/52009-wishlist.json"
import ButtonStyle from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Wishlist = () => {
  const {wishlistProducts} = useSelector(state=> state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // lottie files properties
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wishLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
    <div className='mt-5'>
      {
        !wishlistProducts.length ? 
        <div className="m-auto text-center mt-5">
           <Lottie options={defaultOptions} height={400} width={600} /> 
           <h4 className="mt-5">WishList is empty lets go pick some products <ButtonStyle btntitle={"Home"} action={()=>navigate('/')}/></h4>
         </div> :
          <div className='d-flex flex-column justify-content-center'>
    <div className='d-flex flex-wrap gap-5 mt-5 justify-content-center'>
   { 
    wishlistProducts.map(product=>{
      return(
          <ProductCard product={product} navigation={()=>navigate(`/product/${product.id}`)} key={product.id} wishlistBool={true}/>
      )
    })    
  }
  </div>
  <button className="btn-lg w-25 mt-5 btn-danger container fw-bold" onClick={()=>dispatch(clearAll())} >Clear All</button>
  </div>
} 
</div>
</motion.div>
  )
}

export default Wishlist