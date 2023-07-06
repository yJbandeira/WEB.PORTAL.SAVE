import { Button, Card, Col, Row, Spacer, Text } from "@nextui-org/react";
import { useContext, useState } from "react";
import "./index.scss";
import { FoodIcon, LinkIcon } from "../../assets/icons";
import Carousel from "../../components/Carousel/Carousel";
import { homeCards } from "../../utils/HomeCards";
import { Context } from "../../globalState/context";

export default function Home() {
  const [user, setUser] = useState({
    name: "João Bandeira",
    email: "joaoml.victor13@gmail.com",
    userName: "yjbandeira",
  });

  const { cards, setCards } = useContext(Context);

  return (
    <div className="home-page">
      <Text h3>Bem vindo, {user.name}</Text>

      <Spacer y={3} />

      <Text h4>Ultimos adicionados</Text>
      <Spacer y={1} />
      <Carousel items={homeCards} />
    </div>
  );
}
