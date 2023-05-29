import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`

0%{
transform: rotate(0deg);
}

50%{
border-radius: 50%;
}

100%{
transform: rotate(360deg);
border-radius: 0%;
}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.backgroundColor};
`;
const Emoji = styled.span`
  font-size: 20px;
`;

const Box = styled.div`
  background-color: ${(prop) => prop.theme.textColor};
  width: 100px;
  height: 100px;
  animation: ${rotateAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😚</span>
      </Box>
      <Box>
        <Emoji>🥸</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
