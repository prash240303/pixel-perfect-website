import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
function Navbaar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:flex-wrap ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link  to="/" className="mr-10  hover:text-gray-700 ">Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link to="/" className="mr-10  hover:text-gray-700 ">paper themes</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link to="/speaker" className="mr-10  hover:text-gray-700 ">speakers</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link to="/committee" className="mr-10  hover:text-gray-700 ">committee</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link to="/" className="mr-10 hover:text-gray-700 ">sponsors</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer "
      >
        <Link to="/" className="mr-10  hover:text-gray-700 ">awards</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link to="/" className="mr-10 hover:text-gray-700 ">registrations</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg uppercase text-black cursor-pointer"
      >
        <Link to="/contact" className="mr-10 hover:text-gray-700 ">contact </Link>
      </Typography>
    </ul>
  );
  return (
    <div className="w-full flex items-center justify-center border-b px-6 pb-3 border-black">
            <div className="flex w-full py-3 flex-col md:flex-row items-center border-x border-black  justify-center">
              <div className="md:ml-auto md:mr-auto flex flex-wrap items-center  pt-3 font-bold text-lg uppercase text-black cursor-pointer justify-center navbarLinks">
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">Home</Link>
                <Link to="/" className="mr-10  hover:text-[#7E7E7E] ">paper themes</Link>
                <Link  to="/speaker" className="mr-10  hover:text-[#7E7E7E] ">speakers</Link>
                <Link to="/committee" className="mr-10  hover:text-[#7E7E7E] ">committee</Link>
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">sponsors</Link>
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">awards</Link>
                <Link  to="/" className="mr-10  hover:text-[#7E7E7E] ">registrations</Link>
                <Link  to="/contact" className="mr-10  hover:text-[#7E7E7E] ">contact us</Link>
              </div>
            </div>
          </div>
  )
}

export default Navbaar


