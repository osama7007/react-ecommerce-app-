import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductCard from "../../components/producrCard";
import HeadLine from '../../components/headLine';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';

const BestSeller = () => {
    const {records} = useSelector(state=> state.product)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
      }, [])
    
    const animations = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
        transition: { delay: 0.5 },
        duration: 5,
      }
  return (
    <motion.div {...animations}>  
     <HeadLine title={"Best seller"}/> 
    <div className="d-flex flex-wrap gap-2 justify-content-center container-fluid ">
            {
             records.filter((product)=>{
                return(
                    product.best_seller === true
                )
            }).map(product =>{
                return (
                       <ProductCard product={product}  navigation={()=>navigate(`/product/${product.id}`)} key={product.id}/>
                )
            }
    )}
        </div>
    </motion.div>
  )
}

export default BestSeller