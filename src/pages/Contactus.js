import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './contact-page.css';
import Footer from '../Components/Footer';
const Contactus = () => {
        const navigate = useNavigate(); 
      
        const onHomeTextClick = useCallback(() => {
          navigate("/"); // Navigate to "LandingPage1"
        }, [navigate]);
      
        const onAboutTextClick = useCallback(() => {
          navigate("/About");
        }, [navigate]);
        const onEventsTextClick = useCallback(() => {
          navigate("/About");
        }, [navigate]);
        const onContactTextClick = useCallback(() => {
          navigate("/Contactus")
        }, []);
    return (
        <div className="container">
        <div className="navbar">
            <img src="logo-3-1@2x.png" alt="IIC logo" width={200}/>
            <div className="con1">
                <a href='#' onClick={onHomeTextClick}>Home</a>
                <a href="#" onClick={onAboutTextClick}>About</a>
                <a href="#">Team</a>
                <a href="#" onClick={onEventsTextClick}>Events</a>
                <a href="#" onClick={onContactTextClick}>Contact-us</a>
            </div>
            <img src="image-7@2x.png" alt="college logo" width={200}/>
        </div>
        <div className="img2">
            <img src="./Polygon 1.png" alt="polygon" />
            <div className="main">
                <div className="cont">
                    <div className="img1">
                        <img src="young-man.png" alt="young man"/>
                    </div>
                    <div className="info1">
                        <h2>Contact Information</h2>
                        <h4>Building Connections that last</h4>
                    </div>
                    <div className="info2">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:innovation@mituniversity.edu.in">innovation@mituniversity.edu.in</a>
                    </div>
                    <div className="info3">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>New IT Building, N-602, MIT ADT University, Rajbaugh, Solapur - Pune Hwy, near Bharat Petrol Pump, Loni Kalbhor, Maharashtra 412201</p>
                    </div>
                    <div className="icon1">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div className="shape1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="137" viewBox="0 0 137 137" fill="none">
                            <circle cx="68.5" cy="68.5" r="68.5" fill="#787CFF" fill-opacity="0.5"
                            style={{fill: 'rgba(120, 124, 255, 0.50)'}}/>
                        </svg>
                        </div>
                        <div className="shape2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="174" viewBox="0 0 190 174" fill="none">
                                <circle cx="113.5" cy="113.5" r="113.5" fill="#787CFF"/>
                                <circle cx="113.5" cy="113.5" r="113.5" fill="black" fill-opacity="0.2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="img3">
                    <img src="Polygon 2.png" alt="" />
                </div>
        </div>
         <Footer />
    </div>
    )
  }

export default Contactus
