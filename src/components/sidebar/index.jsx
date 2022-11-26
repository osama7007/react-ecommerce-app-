import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import { Button, Popover } from 'antd';
import { RiComputerFill , RiInkBottleLine } from 'react-icons/ri';
import { GiClothes , GiGamepad } from 'react-icons/gi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { SiCodemirror } from 'react-icons/si';
import { AiOutlineClear , AiFillCar} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import HeadLine from "../headLine";
const Sidebar = () => {
  const navigate = useNavigate();
const electoincs = (
  <ul>
                <li> <Link to="/products/:title=TV">TV</Link> </li>
                <li> <Link to="/products/:title=Watch">Watches</Link> </li>
                <li> <Link to="#">Speakers</Link> </li>
                <li> <Link to="#">HeadPhones</Link> </li>
                <li> <Link to="#">Projectors</Link> </li>
            </ul>
);
const fashion = (
  <ul>
                <li> <Link to="#">Clothes</Link> </li>
                <li> <Link to="#">Gloves</Link> </li>
                <li> <Link to="#">Bags</Link> </li>
                <li> <Link to="#">Stockings</Link> </li>
                <li> <Link to="#">Sunglasses</Link> </li>
                <li> <Link to="#">Suits</Link> </li>
            </ul>
);
const fragrances = (
  <ul>
                <li> <Link to="#">Women</Link> </li>
                <li> <Link to="#">Men</Link> </li>
            </ul>
);
const games = (
  <ul>
                <li> <Link to="#">Playstation</Link> </li>
                <li> <Link to="#">Xbox</Link> </li>
                <li> <Link to="#">Wii</Link> </li>
                <li> <Link to="#">Controllers</Link> </li>
                <li> <Link to="#">Accessories</Link> </li>
            </ul>
);
const appliances = (
  <ul>
                <li> <Link to="#">washing machine</Link> </li>
                <li> <Link to="#">cooker</Link> </li>
                <li> <Link to="#">heater</Link> </li>
                <li> <Link to="#">Refrigerator</Link> </li>
                <li> <Link to="#">Coffe machine</Link> </li>
            </ul>
);

const detergents = (
  <ul>
                <li> <Link to="#">floor cleaner</Link> </li>
                <li> <Link to="#">washing powders</Link> </li>
                <li> <Link to="#">cloths cleaner</Link> </li>
                <li> <Link to="#">disinfectants</Link> </li>
            </ul>
);
const beautifying = (
  <ul>
                <li> <Link to="#">makeup</Link> </li>
                <li> <Link to="#">rouge</Link> </li>
                <li> <Link to="#">eyeshadow</Link> </li>
                <li> <Link to="#">Eyeliners</Link> </li>
                <li> <Link to="#">wig</Link> </li>
            </ul>
);
const accessories = (
  <ul>
                <li> <Link to="#">Led</Link> </li>
                <li> <Link to="#">Car wipers</Link> </li>
                <li> <Link to="#">Car speakers</Link> </li>
                <li> <Link to="#">pedals</Link> </li>
                <li> <Link to="#">tires</Link> </li>
                <li> <Link to="#">polish</Link> </li>
            </ul>
);
const computers = (
  <ul>
                <li> <Link to="#">Dell</Link> </li>
                <li> <Link to="#">Asus</Link> </li>
                <li> <Link to="#">HP</Link> </li>
                <li> <Link to="#">Razer</Link> </li>
                <li> <Link to="#">Appel</Link> </li>
                <li> <Link to="#">Lenovo</Link> </li>
            </ul>
);

  return (
    <div className={`${style.sidebar_wrapper} container`}>
      <ul>
        <li>
          <HeadLine title={"Categories"}/>
        </li>
        <li>
        <Popover placement="right" content={electoincs} trigger="hover">
         <Button onClick={()=>navigate('/products/:category=Electronics')} ><span className="mx-2" ><RiComputerFill/></span> Electronics</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={fashion} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Fashion')}><span className="mx-2" ><GiClothes/></span> Fashion</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={appliances} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Appliancies')}><span className="mx-2" ><CgSmartHomeRefrigerator/></span> Appliancies</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={detergents} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Detergents')}> <span className="mx-2" ><AiOutlineClear/></span> Detergents</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={beautifying} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Beautifying')}><span className="mx-2" ><SiCodemirror/></span> Beautifying</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={accessories} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Accessories')}><span className="mx-2" ><AiFillCar/></span> Accessories</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={computers} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Computers')}><span className="mx-2" ><RiComputerFill/></span> Computers</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={games} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Games')}><span className="mx-2" ><GiGamepad/></span> Games</Button>
      </Popover>
        </li>
        <li>
        <Popover placement="right" content={fragrances} trigger="hover">
        <Button onClick={()=>navigate('/products/:category=Fragrances')}><span className="mx-2" ><RiInkBottleLine/></span> Fragrances</Button>
      </Popover>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar