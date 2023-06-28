import { Button, Card, Col, Row, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import "./index.scss";
import { FoodIcon, LinkIcon } from "../../assets/icons";
import Carousel from "../../components/Carousel/Carousel";
import { homeCards } from "../../utils/HomeCards";

export default function Filmes() {
  const [user, setUser] = useState({
    name: "João Bandeira",
    email: "joaoml.victor13@gmail.com",
    userName: "yjbandeira",
  });

  return (
    <div className="home-page">
      <Text h3>Filmes</Text>

      <Spacer y={3} />

      <Text h4>Ultimos adicionados</Text>
      <Spacer y={1} />
      <Carousel
        items={homeCards.filter((card) => card.category.name === "Filmes")}
      />
    </div>
  );
}
