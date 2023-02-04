import dowarriors from "../images/do-Warriors-NO-BG.png";
import kijanilogo from "../images/kijani-logo.png";
import revinyopic from "../images/revinyo.png";
import { Link } from "react-router-dom";
function Brands() {
  return (
    <div className="flex flex-row justify-center py-10">
      <Link to="/onisa-profile.pdf" target="_blank" className="text-black text-decoration-none">
        <div className="bg-white shadow-xl font-bold shadow-[#9e1b1d] rounded-full w-60 h-60 flex flex-col justify-center items-center mx-5">
          <p className="text-2xl">ONISA DESIGNS</p>
          <h1 className="text-2xl">COMPANY</h1>
          <h1 className="text-2xl">PROFILE</h1>
        </div>
      </Link>
      <Link to="/do-warriors.pdf" target="_blank">
        <div className="bg-white shadow-2xl shadow-[#9e1b1d] rounded-full w-60 h-60 flex justify-center items-center mx-5">
          <img className={"w-60"} src={dowarriors} alt="onisa logo" />
        </div>
      </Link>
      <Link to="/do-warriors">
        <div className="bg-white shadow-2xl shadow-[#8ec740] rounded-full w-60 h-60 flex justify-center items-center mx-5">
          <img className="w-full mb-2" src={kijanilogo} alt="onisa logo" />
        </div>
      </Link>
      <Link to="/do-warriors">
        <div className="bg-white shadow-2xl shadow-[#8ec740] rounded-full w-60 h-60 flex justify-center items-center mx-5">
          <img className="w-full mb-6" src={revinyopic} alt="onisa logo" />
        </div>
      </Link>
      s
    </div>
  );
}

export default Brands;
