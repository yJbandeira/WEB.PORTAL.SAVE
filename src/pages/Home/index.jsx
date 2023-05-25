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

export default function Home() {
  return (
    <div className="layout">
      <Menu />
      <div className="app-bar">
        <Navbar shouldHideOnScroll variant="sticky">
          <Navbar.Brand></Navbar.Brand>
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
      </div>
    </div>
  );
}
