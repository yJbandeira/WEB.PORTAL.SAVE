import { Button } from "@nextui-org/react";
import { useState } from "react";
import "./index.scss";
import { ChevronLeft, TvIcon } from "../../../assets/icons";

export default function Menu() {
  const [clicked, setClicked] = useState();
  const [label, setLabel] = useState("Filmes");
  const [openMenu, setOpenMenu] = useState(true);
  const [chevronClassName, setChevronClassName] = useState("chevron-left");
  const [menuClassName, setMenuClassName] = useState("background-menu");

  function CloseMenu() {
    localStorage.setItem("label", label);
    //setLabel("");
    setMenuClassName("background-menu background-menu--closed");

    setChevronClassName("chevron-left chevron-left--rotated");
    setOpenMenu(false);
  }

  const OpenMenu = () => {
    setLabel(localStorage.getItem("label"));
    localStorage.removeItem("label");
    setMenuClassName("background-menu");
    setChevronClassName("chevron-left");

    setOpenMenu(true);
  };

  return (
    <div className={menuClassName} id="menu">
      <div className="buttons-menu">
        <Button
          id="button1"
          className={`buttons-menu--button ${
            openMenu ? "" : "buttons-menu--button--onlyIcon"
          }`}
          //light={clicked !== "button1"}
          color="primary"
          auto
          icon={<TvIcon />}
          onPress={(e) => {
            setClicked(e.target.id);
          }}
        >
          <div
            className={`buttons-menu--label ${
              openMenu ? "" : "buttons-menu--label--onlyIcon"
            }`}
          >
            {label}
          </div>
        </Button>

        <Button
          id="button2"
          light={clicked !== "button2"}
          color="primary"
          auto
          onPress={(e) => {
            setClicked(e.target.id);
          }}
        >
          {label}
        </Button>

        <Button
          id="button3"
          light={clicked !== "button3"}
          color="primary"
          auto
          onPress={(e) => {
            setClicked(e.target.id);
          }}
        >
          {label}
        </Button>

        <Button
          id="button4"
          light={clicked !== "button4"}
          color="primary"
          auto
          onPress={(e) => {
            setClicked(e.target.id);
          }}
        >
          {label}
        </Button>

        <Button
          id="button5"
          light={clicked !== "button5"}
          color="primary"
          auto
          onPress={(e) => {
            setClicked(e.target.id);
          }}
        >
          {label}
        </Button>
      </div>
      <Button
        className="button-close-menu"
        id="button-close"
        color="primary"
        auto
        icon={<ChevronLeft className={chevronClassName} />} // Pass the className to the icon component
        onPress={() => {
          openMenu ? CloseMenu() : OpenMenu();
        }}
      />
    </div>
  );
}
