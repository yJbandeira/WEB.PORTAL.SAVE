import { Button } from "@nextui-org/react";
import { useState } from "react";
import "./index.scss";
import { ChevronLeft } from "../../../assets/icons";
import { buttonsMenu } from "../../../utils/buttons";

export default function ContentMenu({ clicked, setClicked, openMenu, setOpenMenu }) {
  return (
    <div className="background-content-menu" id="content-menu">
      <div className="buttons-content-menu">
        {buttonsMenu.map((button) => {
          return (
            <Button
              id={button.id}
              className={`buttons-content-menu--button ${
                openMenu ? "" : "buttons-content-menu--button--onlyIcon"
              }`}
              light={clicked !== button.id}
              color="primary"
              auto
              icon={button.icon}
              onPress={(e) => {
                setClicked(e.target.id);
                setOpenMenu(false);
              }}
            >
              <div
                className={`buttons-content-menu--label ${
                  openMenu ? "" : "buttons-content-menu--label--onlyIcon"
                }`}
              >
                {button.label}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
