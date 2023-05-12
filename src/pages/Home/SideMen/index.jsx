import { Button, Grid } from "@nextui-org/react";
import { useState } from "react";
import './index.scss'

export default function Menu() {
  const [clicked, setClicked] = useState();
  return (
    <div className="background-menu">
      <Grid.Container gap={2} direction="column">
        <Grid>
          <Button
            id="button1"
            light={clicked !== "button1"}
            color="primary"
            auto
            onPress={(e) => {
              setClicked(e.target.id);
            }}
          >
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button
            id="button2"
            light={clicked !== "button2"}
            color="primary"
            auto
            onPress={(e) => {
              setClicked(e.target.id);
            }}
          >
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button
            id="button3"
            light={clicked !== "button3"}
            color="primary"
            auto
            onPress={(e) => {
              setClicked(e.target.id);
            }}
          >
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button
            id="button4"
            light={clicked !== "button4"}
            color="primary"
            auto
            onPress={(e) => {
              setClicked(e.target.id);
            }}
          >
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button
            id="button5"
            light={clicked !== "button5"}
            color="primary"
            auto
            onPress={(e) => {
              setClicked(e.target.id);
            }}
          >
            Primary
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}
