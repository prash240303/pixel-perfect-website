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
    <>
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-4 lg:py-4">
      <div className="flex items-center justify-end text-blue-gray-900">
        
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 color text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            color='black'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        
      </MobileNav>
    </Navbar>
    </>
  )
}

export default Navbaar


