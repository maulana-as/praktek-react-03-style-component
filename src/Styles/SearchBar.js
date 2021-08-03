import styled from "styled-components";

export const StyledSearchBar = styled.div`
`;

export const StyledSearchBarContent = styled.div`
  max-width: 430px;
  width: 100%;
  height: 35px;
  background: #fff;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  color: #fff;

  input {
    font-family: "Abel", sans-serif;
    font-size: 14px;
    position: absolute;
    left: 0px;
    margin: 0;
    padding: 0 0 0 20px;
    border: 0;
    width: 95%;
    background: transparent;
    color: #000;
    :focus {
        outline: none;
      }
  }

  @media only screen and (max-width:700px) {
   display: none
}
`;
