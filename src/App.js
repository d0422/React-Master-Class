import styled, { keyframes } from "styled-components";
const Father = styled.div`
  display: flex;
`;
const animation = keyframes`
  0%{
    transform :rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform:rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform :rotate(0deg);
    border-radius: 0px;
  }
`;
const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;
const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation} 5s linear infinite;
  ${Text} {
    font-size: 20px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Input = styled.input.attrs({ required: true })``;
function App() {
  return (
    <Father>
      <Box color="teal">
        <Text>어쩔티비</Text>
      </Box>
      <Circle color="tomato"></Circle>
      <Input></Input>
    </Father>
  );
}

export default App;
