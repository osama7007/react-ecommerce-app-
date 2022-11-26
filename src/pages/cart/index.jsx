import style from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, decrement,increment, deleteProduct } from "../../redux/cartSlice";
import { MdDeleteForever } from 'react-icons/md';
import Lottie from "react-lottie";
import shpping from "../../assets/lottieFiles/112468-online-shopping.json"
import ButtonStyle from "../../components/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Modal } from 'antd';

import PaymentDetails from "../payment";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const {cartProducts} = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
// lottie files properties
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: shpping,
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
      {
         !cartProducts.length ?
         <div className="m-auto text-center">
           <Lottie options={defaultOptions} height={400} width={600} /> 
           <h4 className="mt-5">Cart is empty lets go pick some products <ButtonStyle btntitle={"Home"} action={()=>navigate('/')}/></h4>
         </div>
        :
    <div className="d-flex justify-content-center flex-column gap-2 container-fluid " >
      {
        cartProducts.map(product=>{
          return(
              <table key={product.id} >
              <tr>
                <th>Product image</th>
                <th>Product category</th>
                <th>Product title</th>
                <th>Product price</th>
                <th>Product amount</th>
                <th>+/-</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td> <img src= {product.img} alt="productIMG" className={`${style.imgWrapper}`} /></td>
                <td>{product?.category}</td>
                <td>{product?.title}</td>
                <td>{product?.price}</td>
                <td>{product?.count}</td>
                <td>
                  <button className="btn btn-danger mx-3 fw-bold" onClick={()=>dispatch(decrement(product.id))} >-</button>
                  <button className="btn btn-primary fw-bold" onClick={()=>dispatch(increment(product.id))} >+</button>
                </td>
                <td>
                <button className="btn btn-primary fw-bold" onClick={()=>dispatch(deleteProduct(product.id))} >
                  <MdDeleteForever/>
                </button>

                </td>
               </tr>
                </table>

          )
        })
      }

       <p className="fw-bold text-danger border w-25 text-center p-3 m-auto rounded" >
         Total Price :
        {
          cartProducts.reduce((prev , curr)=>{
              return curr.price*curr.count+prev
          },0)
      }
      <span className="mx-2"> EG</span>
       </p> 
      <Button className={`${style.orderBtn} btn m-auto`} onClick={() => setOpen(true)}>
        ORDER
      </Button>
      <Modal
        title="customer details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
                  <PaymentDetails/>

      </Modal>
<button className="btn-lg w-25 btn-danger container fw-bold" onClick={()=>dispatch(clearAll())} >Clear All</button>
  
    </div>
      }
    </motion.div >
  )
}

export default Cart