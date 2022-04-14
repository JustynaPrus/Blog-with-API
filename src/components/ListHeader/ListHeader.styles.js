import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
  width: 100%;
  input {
    padding: 5px 0 5px 5px;
    min-width: 20vw;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  text-align: center;
  padding: 15px 0 15px 0;
  background-color: lightblue;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 5fr;
`;
