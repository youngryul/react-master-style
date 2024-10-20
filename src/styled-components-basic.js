import styled from "styled-components"

const Father = styled.div`
    display: flex;
`;

const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`  // Box의 모든 속성을 가져옴 
    border-radius: 50px;
`;

const Btn = styled.button`
    color: white;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
`;

const Input = styled.input.attrs({required: true})` // 모든 input 태그에 속성을 넣을 때 attrs 사용 
    background-color: tomato;
`;

function App() {
    return (
        <Father>
            {/*<Box bgColor="teal"></Box>*/}
            {/*<Circle bgColor="tomato"/>*/}
            <Btn>Log in</Btn>
            <Btn as="a" href="/">Log in</Btn>  {/* button 태그 대신 html 태그를 변경할 때 as 사용 */}
            <Input />
            <Input />
            <Input />
        </Father>
    );
}

export default App;
