import { Button } from "@nextui-org/react";
import { useState } from "react";
import "./index.scss";
import { ChevronLeft } from "../../../assets/icons";
import { buttonsMenu } from "./buttons";

export default function Menu() {
  const [clicked, setClicked] = useState("button1");
  const [openMenu, setOpenMenu] = useState(true);
  const [chevronClassName, setChevronClassName] = useState("chevron-left");
  const [menuClassName, setMenuClassName] = useState("background-menu");

  function CloseMenu() {
    setMenuClassName("background-menu background-menu--closed");
    setChevronClassName("chevron-left chevron-left--rotated");
    setOpenMenu(false);
  }

  const OpenMenu = () => {
    setMenuClassName("background-menu");
    setChevronClassName("chevron-left");
    setOpenMenu(true);
  };

  return (
    <div className={menuClassName} id="menu">
      <div className="buttons-menu">
        {buttonsMenu.map((button) => {
          return (
            <Button
              id={button.id}
              className={`buttons-menu--button ${
                openMenu ? "" : "buttons-menu--button--onlyIcon"
              }`}
              light={clicked !== button.id}
              color="primary"
              auto
              icon={button.icon}
              onPress={(e) => {
                setClicked(e.target.id);
              }}
            >
              <div
                className={`buttons-menu--label ${
                  openMenu ? "" : "buttons-menu--label--onlyIcon"
                }`}
              >
                {button.label}
              </div>
            </Button>
          );
        })}
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
