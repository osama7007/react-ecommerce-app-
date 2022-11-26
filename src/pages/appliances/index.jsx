import { motion } from "framer-motion";
import ProductCard from "../../components/producrCard";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Appliancies = () => {
  const [Appliancies, setAppliancies] = useState([]);
  const navigate = useNavigate();
  const getAppliancies = ()=>{
      fetch(`http://localhost:3005/products?category=Appliancies`)
      .then(res => res.json())
      .then(json=> setAppliancies(json))
  }
  
  useEffect(()=>{
      getAppliancies();
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
          Appliancies.map((product)=>{
              return(
                  <ProductCard product={product} navigation={()=>navigate(`/product/${product.id}`)} key={product.id}/>
              )
          })
  }
      </div>
      </motion.div>
    )
}

export default Appliancies