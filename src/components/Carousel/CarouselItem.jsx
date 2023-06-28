import { Button, Card, Text } from "@nextui-org/react";
import React from "react";
import { LinkIcon } from "../../assets/icons";

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Body className="card-image" css={{ p: 0 }}>
          <Card.Image
            src={item.srcImage}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "rgba(62, 150, 239, 0.37)",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <div className="footer-card">
            <div className="category-card">
              {item.category.icon}
              <Text h6 color="white">
                {item.category.name}
              </Text>
            </div>
            <Button
              light
              auto
              rounded
              color="primary"
              icon={<LinkIcon />}
              onPress={(e) => {
                window.open(item.link);
              }}
            />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CarouselItem;
