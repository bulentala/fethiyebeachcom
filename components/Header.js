import React from "react";
import Nav from "./Nav";
import AllHead from "./AllHead";
const Header = () => {
  return (
    <>
      <AllHead />
      <div className='border-b border-gray-200'>
        <div>
          <Nav />
        </div>
      </div>
    </>
  );
};
export const config = { amp: true };
export default Header;
