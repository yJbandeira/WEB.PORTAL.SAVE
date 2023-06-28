import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import "./index.scss";
import { ChevronLeft } from "../../../assets/icons";
import { buttonsMenu } from "../../../utils/buttons";

export default function Menu({ clicked, setClicked, openMenu, setOpenMenu }) {
  const [chevronClassName, setChevronClassName] = useState("");
  const [menuClassName, setMenuClassName] = useState("");

  useEffect(() => {
    const menuClassName = openMenu
      ? "background-menu"
      : "background-menu background-menu--closed";
    const chevronClassName = openMenu
      ? "chevron-left"
      : "chevron-left chevron-left--rotated";

    setMenuClassName(menuClassName);
    setChevronClassName(chevronClassName);
  }, [openMenu]);

  function CloseMenu() {
    setOpenMenu(false);
  }

  const OpenMenu = () => {
    setOpenMenu(true);
  };

  console.log(openMenu);
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
