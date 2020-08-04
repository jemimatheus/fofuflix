import styled from "styled-components";
import { Link } from "react-router-dom";


const Button = styled(Link)`
  color: #88d317;
    border: 1px solid #88d317;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
  }
`;

export default Button;