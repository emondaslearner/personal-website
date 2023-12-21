import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Spainer from "../Spainer";

const Navbar = () => {
  const [status, setStatus] = useState(false);
  const [path, setPath] = useState("");
  const navigate = useNavigate();

  const showAnimation = (loca) => {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
      navigate(loca);
    }, 2200);
  };
  return (
    <>
      {status && <Spainer path={path} />}
      <div
        style={{ boxShadow: "0 10px 30px -10px #977500" }}
        className="w-[10%] !z-20"
      >
        <div className="w-[100%] flex flex-col items-center bg-[#0A1A2F] h-[100vh]">
          <div className="cursor-pointer">
            <Link
              className="text-white h-[30vh] cursor-pointer flex justify-center"
              onClick={() => showAnimation("/")}
              to="/"
            >
              <img className="w-[80%] m-auto" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="h-[35vh] justify-center w-full flex flex-col items-center !p-0 !m-0">
            <li className="w-full">
              <Link
                onClick={() => showAnimation("/about")}
                className="block w-full py-[10px] text-[#CCD6F6] hover:bg-[#9774003a] border-[#ddd] hover:border-[#977500] duration-500 hover:text-[#977500] border-y-[.1px] text-center text-base"
                to="/"
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                onClick={() => showAnimation("/skills")}
                className="block w-full py-[10px] text-[#CCD6F6] hover:bg-[#9774003a] border-[#ddd] hover:border-[#977500] duration-500 hover:text-[#977500] border-b-[.1px] text-center text-base"
                to="/skills"
              >
                My Skills
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="block w-full py-[10px] text-[#CCD6F6] hover:bg-[#9774003a] border-[#ddd] hover:border-[#977500] duration-500 hover:text-[#977500] border-b-[.1px] text-center text-base"
                to="/"
              >
                Work
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="block w-full py-[10px] text-[#CCD6F6] hover:bg-[#9774003a] border-[#ddd] hover:border-[#977500] duration-500 hover:text-[#977500] border-b-[.1px] text-center text-base"
                to="/"
              >
                Connect
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="block w-full py-[10px] text-[#CCD6F6] hover:bg-[#9774003a] border-[#ddd] hover:border-[#977500] duration-500 hover:text-[#977500] border-b-[.1px] text-center text-base"
                to="/"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <ul className="w-full h-[35vh] flex flex-col justify-center items-center">
            <a href="">
              <i className="text-[#CCD6F6] text-2xl hover:text-3xl duration-300 hover:text-[#977500] my-[5px] fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="text-[#CCD6F6] text-2xl hover:text-3xl duration-300 hover:text-[#977500] my-[5px] fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="text-[#CCD6F6] text-2xl hover:text-3xl duration-300 hover:text-[#977500] my-[5px] fa-brands fa-linkedin"></i>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
