import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Wrapper from "../../components/wrapper";
import Head from "next/head";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Works() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Head>
        <title>Raon Studio</title>
        <link rel="icon" href="/logos/raon-logo.png" />
      </Head>
      <Wrapper>
        <section className="space-y-12 flex flex-col px-3">
          <h1 className="font-bold text-center text-xl md:text-4xl w-3/4 md:w-1/2 mx-auto">
            Crafting The Idea Into Visual, We Believe a Good Visual is a Good
            Business
          </h1>
          <p className="text-gray-600 text-center w-3/4 md:w-1/2 mx-auto">
            Our mission is becoming the first choice graphic design and
            illustration company{" "}
          </p>
          <button className="bg-[#EE7526] rounded-full px-4 py-2 text-white font-semibold mx-auto">
            BOOK A SERVICE
          </button>
        </section>
        <section className="my-12">
          <div className="md:flex hidden w-4/5 flex-col md:flex-row justify-center space-x-2   mx-auto">
            <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">
              NFT ART
            </button>
            <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">
              MASCOT & CARTOON
            </button>
            <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">
              T-SHIRT & MERCH
            </button>
            <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">
              ANIME
            </button>
            <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">
              GRAPHIC
            </button>
            <button className="bg-white border-2 border-[#EE7526] rounded-full px-2 py-1 text-[#EE7526]">
              PRESENTATION
            </button>
          </div>
          <div className="w-4/5 md:hidden flex flex-col md:flex-row justify-center space-x-2   mx-auto">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="text"
              color="warning"
              endIcon={<KeyboardArrowDownIcon />}
            >
              <p className="">Menu</p>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              classes="absolute"
            >
              <MenuItem onClick={handleClose}><p className="text-[#EE7526]">NFT ART</p></MenuItem>
              <MenuItem onClick={handleClose}><p className="text-[#EE7526]">MASCOT & CARTOON</p></MenuItem>
              <MenuItem onClick={handleClose}><p className="text-[#EE7526]">T-SHIRT & MERCH</p></MenuItem>
              <MenuItem onClick={handleClose}><p className="text-[#EE7526]">ANIME</p></MenuItem>
              <MenuItem onClick={handleClose}><p className="text-[#EE7526]">GRAPHIC</p></MenuItem>
              <MenuItem onClick={handleClose}><p className="text-[#EE7526]">PRESENTATION</p></MenuItem>
            </Menu>
          </div>
          <div className="w-full lg:w-3/4 grid-cols-2 grid md:grid-cols-4 gap-y-1 mx-auto p-4 lg:p-16">
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
            <div className="h-[164px] w-[164px] lg:h-[200px] lg:w-[200px] bg-gray-300" />
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default Works;
