import notFoundLottie from "../../assets/lottieFiles/71229-not-found.json";
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
const NotFound = () => {
    // lottie files properties
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFoundLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
  return (
    <div className="mt-5 text-center">
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      <h2 className="m-5">Oops Page not found </h2>
      <Link to="/" className="fw-bold text-decoration-none">Back to home page</Link>
    </div>
  )
}

export default NotFound