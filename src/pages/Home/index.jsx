import Menu from "./SideMenu";
import "./index.scss";
import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="layout">
      <Menu />
      <div className="app-bar">
        <Navbar shouldHideOnScrollshouldHideOnScroll variant="sticky">
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              ACME
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
      </div>
    </div>
  );
}
