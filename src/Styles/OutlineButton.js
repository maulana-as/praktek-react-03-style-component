import styled from "styled-components";

export const OutlineButton = styled.button`
border-radius: ${({bigRadius}) => bigRadius ? '30px': '20px'};
border: 2px solid #333;
color: #333;
outline: none;
padding: ${({big}) => big? '5px 10px' : '4px 12px'};
font-size: ${({bigFont}) => bigFont? '12px': '13px'};
transition: all .5s ease;
background-color: #fefefe;
&:hover {
    background-color: #244B9C;
    color: #fff;
    border: none;
}
&:active{
    transform: translateY(.5rem);
}
`;