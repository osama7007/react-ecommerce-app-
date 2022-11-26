import { motion } from "framer-motion";
import ProductCard from "../../components/producrCard";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Detergents = () => {
  const [Detergents, setDetergents] = useState([]);
  const navigate = useNavigate();
  const getDetergents = ()=>{
      fetch(`http://localhost:3005/products?category=Detergents`)
      .then(res => res.json())
      .then(json=> setDetergents(json))
  }
  
  useEffect(()=>{
      getDetergents();
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
          Detergents.map((product)=>{
              return(
                  <ProductCard product={product} navigation={()=>navigate(`/product/${product.id}`)} key={product.id}/>
              )
          })
  }
      </div>
      </motion.div>
    )
}

export default Detergents