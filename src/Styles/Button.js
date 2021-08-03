import styled from "styled-components";

export const Button = styled.button`
border-radius: ${({bigRadius}) => bigRadius ? '30px': '20px'};
background-color: ${({primary}) => primary? '#a4b0c9': '#244B9C'};
color: ${({primary}) => primary ? '#244B9C': '#fff'};
padding: ${({big}) => big? '5px 10px' : '4px 12px'};
font-size: ${({bigFont}) => bigFont? '12px': '13px'};
outline: none;
cursor: pointer;
border: none;
transition: all .5s ease;
&:hover{
    background-color: ${({primary}) => primary? '#fff': '#a4b0c9'};  
    color: #fff;
}
&:active{
    transform: translateY(.5rem);
}

@media only screen and (max-width:1000px) {
    /* width: 100%; */
}
@media only screen and (max-width:375px) {
    font-size: ${({bigFont}) => bigFont? '7px': '8px'};
}

`;