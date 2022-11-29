import style from './Header.module.scss';
import Logo from "../../assets/images/Logo.jpg";
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import SearchBar from '../searchBar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const {cartProducts} = useSelector(state=>state.cart);
  const {isAuth} = useSelector(stete=> stete.auth); //check auth
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (value) => {
    navigate(`/products/:category=${value}`)
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <header className="bg-dark mb-5">
      <nav className="navbar navbar-light container mb-1">
  <Link  to="/" className={`${style.logo_wrapper} navbar-brand d-flex gap-2 align-items-center`}>
    <img src={Logo} alt="logo" className="w-100 rounded-circle"/>
     <h2 className="fw-bold">Shopify</h2>
    </Link>
  <div className="form-inline d-flex align-items-center position-relative"> 
 <SearchBar onChange={onChange}  onSearch={onSearch}/>
 {
  isAuth && 
  <div className={`${style.cart} ms-4 pointer d-flex justify-content-between align-items-center`}>
      <Link to="cart" > <BiCartAlt title='Cart'/></Link>
    <span className="ms-2">{cartProducts.length}</span>
    </div>
 }
    
    {
    isAuth && 
    <div className={`${style.cart} ms-4 pointer fw-bold d-flex justify-content-center align-items-center`}>
    <Link to="WishList" > <AiOutlineHeart title='WishList' className="fs-5"/></Link>
    </div>
    }
    
    {
      !isAuth && 
    <div className={`${style.register} ms-4 pointer fw-bold d-flex justify-content-center align-items-center`}>
    <Link to="login" > Login</Link>
    </div>
    }
    {
      !isAuth && 
    <div className={`${style.register} ms-4 pointer fw-bold d-flex justify-content-center align-items-center`}>
      <Link to="register" > Register</Link>
    </div>
    }
    {
      isAuth && 
    <div className={`${style.register} ms-4 pointer fw-bold d-flex justify-content-center align-items-center`}>
      <Link to="login" onClick={()=>dispatch(logout())} > Sginout</Link>
    </div>
    }
  </div>
  </nav>
  <nav className='underNav p-2 bg-dark' >
    <ul className='d-flex gap-5 justify-content-center '>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/product/top_rated">Top Rated</Link></li>
      <li><Link to="/product/best_seller">Best Seller</Link></li>
      <li><Link to="/product/sales">Sales</Link></li>
    </ul>
  </nav>
    </header>
  )
}

export default Header