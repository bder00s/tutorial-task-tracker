import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  function onClick() {
    console.log("Click");
  }

  return (
    <header className="header">
      <h1>{title}</h1>

      <Button color="red" text="Add" onClick={onClick} />
    </header>
  );
};

// Header.defaultProps = {
//   title:'Task tracker'
// }

export default Header;
