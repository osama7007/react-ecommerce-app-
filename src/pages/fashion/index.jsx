import { motion } from "framer-motion";
import ProductCard from "../../components/producrCard";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Fashion = () => {
  const [Fashion, setFashion] = useState([]);
  const navigate = useNavigate();
  const getFashion = ()=>{
      fetch(`http://localhost:3005/products?category=Fashion`)
      .then(res => res.json())
      .then(json=> setFashion(json))
  }
  
  useEffect(()=>{
      getFashion();
  },[]);
  
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
  
      
  <div className="d-flex flex-wrap gap-5 justify-content-center container-fluid">
          {
          Fashion.map((product)=>{
              return(
                  <ProductCard product={product} navigation={()=>navigate(`/product/${product.id}`)} key={product.id}/>
              )
          })
  }
      </div>
      </motion.div>
    )
}

export default Fashion