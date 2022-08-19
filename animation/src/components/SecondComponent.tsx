import {
  Box,
  Btn,
  Circle,
  Flex,
  GridBox,
  SliderBox,
  Wrapper,
  Grid,
  Wrapper2,
  Overlay,
} from "../Styled";
import styled from "styled-components";
import { addScaleCorrector, AnimatePresence } from "framer-motion";
import { useState } from "react";
const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};
const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};
const SecondComponent = () => {
  const [visible, setVisible] = useState(1);
  const [showing, setShowing] = useState(false);
  const [back, setBack] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  const next = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prev = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => setClicked((prev) => !prev);
  return (
    <>
      <Wrapper2>
        <AnimatePresence>
          {showing ? (
            <Box
              variants={boxVariants}
              initial="initial"
              animate="visible"
              exit="leaving"
            />
          ) : null}
        </AnimatePresence>
        <button onClick={toggleShowing}>Click</button>
      </Wrapper2>
      <Wrapper2>
        <AnimatePresence custom={back}>
          <SliderBox
            custom={back}
            key={visible}
            variants={box}
            initial="entry"
            animate="center"
            exit="exit"
          >
            {visible}
          </SliderBox>
        </AnimatePresence>
        <Flex>
          <Btn onClick={prev}>prev</Btn>
          <Btn onClick={next}>next</Btn>
        </Flex>
      </Wrapper2>
      <Wrapper onClick={toggleClick}>
        <Box
          style={{
            justifyContent: clicked ? "center" : "flex-start",
            alignItems: clicked ? "center" : "flex-start",
          }}
        >
          <Circle color="#00a5ff" layout></Circle>
        </Box>

        <Box>
          {!clicked ? <Circle color="#00a5ff" layoutId="circle" /> : null}
        </Box>
        <Box>
          {clicked ? <Circle color="#00a5ff" layoutId="circle" /> : null}
        </Box>
      </Wrapper>
    </>
  );
};

export default SecondComponent;
