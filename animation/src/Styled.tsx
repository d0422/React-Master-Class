import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled(motion.div)`
  height: 150vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(90deg, rgb(153, 175, 255), rgb(168, 204, 255));
`;

export const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
export const MiniBox = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
export const CBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;
export const BiggerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Svg = styled.svg`
  width: 200px;
  height: 200px;
`;
