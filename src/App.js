import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaRegEyeSlash />);

  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(<FaEye />);
    } else {
      setType("password");
      setIcon(<FaRegEyeSlash />);
    }
  };

  return (
    <div className="wrapper">
      <div className="input-fields">
        <span onClick={handleClick}>
          {icon}
        </span>
        <input type={type} />
      </div>
    </div>
  );
}

export default App;
