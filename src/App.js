import styled from "styled-components";
import './App.css'
import Form from "./components/Form/Form";

const App = () => {

  return (
    <Main>
      <Form/>
    </Main>
  );
}

export default App;

const Main = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;

  background: linear-gradient(
    rgba(10, 100, 150, 1),
    rgba(255, 255, 255, 0.3)
  );


  background-size: cover;

  background-position: center;
  `
