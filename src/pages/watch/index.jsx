import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/producrCard";
import { motion } from "framer-motion";

const Watch = () => {
    const [Watch, setWatch] = useState([]);
    const navigate = useNavigate();

    const getWatch = ()=>{
        fetch(`http://localhost:3005/products?title=Watch`)
        .then(res => res.json())
        .then(json=> setWatch(json))
    }
    useEffect(() =>{
        getWatch();
    },[])
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
            Watch.map((product)=>{
                return(
                    <ProductCard product={product} navigation={()=>navigate(`/product/${product.id}`)} key={product.id}/>
                )
            })
    }
        </div>
        </motion.div>
  )
}

export default Watch