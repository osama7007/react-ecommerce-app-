import style from "./Footer.module.scss";
import Logo from "../../assets/images/Logo.jpg";
import { MdPayment , MdSupportAgent , MdReportGmailerrorred , MdOutlinePrivacyTip} from 'react-icons/md';
import { BsFileEarmarkRuled} from 'react-icons/bs';
import { ImEnter} from 'react-icons/im';
import { GrPinterest} from 'react-icons/gr';
import { SlSocialTwitter , SlSocialFacebook , SlSocialInstagram} from 'react-icons/sl';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`${style.footer_background} row mt-5 container-fluid m-auto`} >
        <div className={`${style.logo_wrapper} d-flex gap-2 align-items-center col`}>
        <img src={Logo} alt="logo" className="rounded-circle"/>
        </div>
        <div className="Contact-section text-center col">
          <ul>
          <h3>Contact</h3>
            <li>
            <Link to="#"><MdSupportAgent/>Support</Link>
            </li>
            <li>
            <Link to="#"> <MdPayment/> Payment</Link>
            </li>
            <li>
            <Link to="#"><MdReportGmailerrorred/> Report</Link>
            </li>
          </ul>
        </div>
        <div className="About-section col">
        <ul>
        <h3>About us</h3>
          <li><Link to="#"><ImEnter/> Join us</Link></li>
          <li> <Link to="#"><BsFileEarmarkRuled/> Conditions</Link></li>
          <li><Link to="#"><MdOutlinePrivacyTip/> Privacy</Link></li>
        </ul>
        </div>
        <div className="follow-section col">
        <ul>
        <h3>Follow us</h3>
          <li><Link to="#"><SlSocialFacebook/> Facebook</Link></li>
          <li><Link to="#"><SlSocialTwitter/> Twitter</Link></li>
          <li> <Link to="#"><SlSocialInstagram/> Instagram</Link></li>
          <li><Link to="#"><GrPinterest/> Pinterest</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer