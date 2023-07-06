import Menu from "./SideMenu";
import "./index.scss";
import {
  Navbar,
  Button,
  Link,
  Dropdown,
  Text,
  Avatar,
} from "@nextui-org/react";

import JoaoAvatar from "../../assets/images/JoaoAvatar.jpg";
import Home from "../Home";
import { useContext, useEffect, useState } from "react";
import Comida from "../Comida";
import Filmes from "../Filmes";
import Restaurantes from "../Restaurantes";
import Lugares from "../Lugares";
import Geral from "../Geral";
import HamburgerMenu from "../../components/HamburgerMenu/Index";
import ContentMenu from "./ContentMenu";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FoodIcon } from "../../assets/icons";
import { selectCards, addCards } from "../../data/cardsData";
import { Context } from "../../globalState/context";

export default function MainPage() {
  const { cards, setCards } = useContext(Context);
  const [clicked, setClicked] = useState("button1");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    async function effect() {
      setCards(await selectCards());

      // const teste = {
      //   srcImage: "teste",
      //   category: {
      //     name: "Restaurantes",
      //     icon: "restaurante",
      //   },
      //   link: "https://www.instagram.com/p/CsoUx-Pgnls/",
      // };

      // await addCards(teste);
    }

    effect();
  }, []);

  return (
    <div className="layout">
      <Menu
        clicked={clicked}
        setClicked={setClicked}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <div className="app-bar">
        <Navbar shouldHideOnScroll variant="sticky">
          <Navbar.Brand>
            <HamburgerMenu
              onClickEvent={() => setOpenMenu(!openMenu)}
              openMenu={openMenu}
            />
          </Navbar.Brand>
          <Navbar.Content>
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src={JoaoAvatar}
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    joaoml.victor13@gmail.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="configurations" withDivider>
                  Configurações
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Sair
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item> */}
          </Navbar.Content>
        </Navbar>

        {openMenu && (
          <ContentMenu
            clicked={clicked}
            setClicked={setClicked}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        )}

        {clicked === "button1" && <Home />}
        {clicked === "button2" && <Filmes />}
        {clicked === "button3" && <Comida />}
        {clicked === "button4" && <Restaurantes />}
        {clicked === "button5" && <Lugares />}
        {clicked === "button6" && <Geral />}
      </div>
    </div>
  );
}
