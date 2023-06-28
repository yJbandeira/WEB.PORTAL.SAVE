import { useEffect, useState } from "react";
import "./index.scss";

export default function HamburgerMenu({ onClickEvent, openMenu }) {
  const [btnClassName, setBtnClassName] = useState("");

  useEffect(() => {
    const className = openMenu ? "btn active" : "btn not-active";
    document.getElementById("hamburger-btn").className = className;

    setBtnClassName(className);
  }, [openMenu]);

  const onClick = () => {
    document.getElementById("hamburger-btn").className = btnClassName;

    onClickEvent();
  };

  return (
    <div onClick={onClick} class="box">
      <div id="hamburger-btn" class="btn not-active">
        <span className="btn-span"></span>
        <span className="btn-span"></span>
        <span className="btn-span"></span>
      </div>
    </div>
  );
}
