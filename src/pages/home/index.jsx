import Sidebar from "../../components/sidebar";
import style from "./Home.module.scss";
import { useDispatch , useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/productSlice";
import Spinner from "../../components/spinner";
import SwiperCom from "../../components/swiper/swiper";
import ProductCard from "../../components/producrCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDropdownCircle } from 'react-icons/io';
const Home = () => {
  const [showSidebar , setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const {records , loading} = useSelector(state=> state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  
      // animate component
      const animations = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
        transition: { delay: 0.5 },
        duration: 5,
      }
    // showSideBar function 
    const showSideBar = () => {
      setShowSidebar(!showSidebar)
    }
  return (
    
      <motion.div {...animations}>
      <SwiperCom products={records}/>
      {
      loading ? 
      <Spinner/> :
      <div className={` ${style.home} row justify-content-center position-relative`}>
    <div className="col-3 d-none d-lg-block">
    <Sidebar/>
    </div>
    <div className="d-block d-lg-none" >
      <IoIosArrowDropdownCircle style={{fontSize:"50px"}} className={`${style.burger_icon} pointer ms-3 fw-bold `} onClick={()=>showSideBar()}/>
      {
        showSidebar &&
        <div className={`${style.burger_sideBar}`} >
          <Sidebar/>
        </div>
      }
    </div>
    <div className="col-9 row gap-3 " >
      {
        records.map((product , index)=>{
          return(
             <ProductCard product={product} navigation={()=>navigate(`product/${product.id}`)} key={index} />
          )
        })
      }
    </div>
   </div>
    }
      </motion.div>
    
   
  )
}

export default Home