import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
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
