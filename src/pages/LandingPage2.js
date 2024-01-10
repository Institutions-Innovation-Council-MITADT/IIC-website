import { useCallback } from "react";
import 'animate.css'
import { useNavigate } from "react-router-dom";

const LandingPage2 = () => {
  const navigate = useNavigate(); 

  const onHomeTextClick = useCallback(() => {
    navigate("/"); // Navigate to "LandingPage1"
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);


  const onEventsTextClick = useCallback(() => {
    //add events page when made
  }, []);

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">
      <img
        className="animate__animated animate__fadeIn absolute top-0 left-0 w-full h-full object-cover"
        alt="LandingPage2"
        src="/LandingPage2.png"
      />
      <nav style={{
        zIndex: 2,
        background: 'rgba(255, 255, 255, 0.4)'
      }} className="absolute top-0 bg-gray w-full overflow-hidden p-2 lg:p-[2rem] flex flex-wrap justify-around items-center">
        <img
          className="w-20 h-auto lg:w-[11.69rem] lg:h-[6.75rem]"
          alt="Logo"
          src="/logo-3-1@2x.png"
        />
        <div className="flex-shrink-0 space-x-[0.3rem] lg:space-x-[1.5rem]">
          <span onClick={onHomeTextClick} className="cursor-pointer">Home</span>
          <span onClick={onAboutTextClick} className="cursor-pointer">About</span>
          <span>Team</span>
          <span onClick={onEventsTextClick} className="cursor-pointer">Events</span>
          <span>Contact</span>
        </div>
        <img
          className="flex-shrink-0 w-20 h-auto lg:w-[11.75rem] lg:h-[6.31rem]"
          alt="Another Image"
          src="/image-7@2x.png"
        />
      </nav>
      <img
        className="animate__animated animate__fadeInLeft absolute top-[13rem] left-[15rem]"
        alt="mascot"
        src="/mascot.png"
      />
      <img
        className="animate__animated animate__fadeInRight absolute top-[15rem] left-[55rem]"
        alt="Text"
        src="/Text.png"
      />
    </div>
  );
};

export default LandingPage2;
