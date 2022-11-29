import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductCard from "../../components/producrCard";

const Sales = () => {
    const [sales, setSales] = useState([]);
const navigate = useNavigate();
const getSale = ()=>{
    fetch(`http://localhost:3005/products?sale=true`)
    .then(res => res.json())
    .then(json=> setSales(json))
}

useEffect(()=>{
    getSale();
},[]);

const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { delay: 0.5 },
    duration: 5,
  }
  return (
    <motion.div {...animations}>    
    <div className="d-flex flex-wrap justify-content-center container-fluid">
            {
            sales.map((product)=>{
                return(
                    <ProductCard product={product} navigation={()=>navigate(`/product/${product.id}`)} key={product.id}/>
                )
            })
    }
        </div>
        </motion.div>
  )
}

export default Sales