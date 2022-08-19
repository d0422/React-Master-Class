import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import { GridBox, Wrapper, Grid, Overlay, Box } from "./Styled";
import SecondComponent from "./components/SecondComponent";

function App() {
  const [Id, setId] = useState<null | string>(null);
  return (
    <>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <Wrapper>
        <Grid>
          {[1, 2, 3, 4].map((n) => (
            <GridBox
              onClick={() => {
                setId(n + "");
              }}
              key={n}
              layoutId={n + ""}
            />
          ))}
        </Grid>
        <AnimatePresence>
          {Id ? (
            <Overlay
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              onClick={() => setId(null)}
            >
              <GridBox
                layoutId={Id + ""}
                style={{ width: 400, height: 200 }}
              ></GridBox>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
