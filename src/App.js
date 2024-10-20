import styled, {keyframes} from "styled-components"

const Title = styled.h1`
    color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme};
`;

const animation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`  // Box 안에 있는 span 태그에도 접근 가능 
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animation} 1s linear infinite;
    ${Emoji} {
      &:hover {
        font-size: 48px;
      }
      &:active {
        opacity: 0;
      }
    }
`;

/* Box 안에서 이벤트를 다르게 줄 수 있음 */

function App() {
  return (
      <Wrapper>
         <Title>Hello</Title>
      </Wrapper>
  );
}

export default App;
