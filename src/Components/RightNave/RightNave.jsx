import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display : none;
    li {
        padding: 18px 10px;
        margin-top: 26px;
    }
    
    @media (max-width: 920px) {
        z-index: 100;
        display: flex;
        flex-flow: row nowrap;
        flex-flow: column nowrap;
        background-color: #0C011E;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
    }
`;

const RightNav = ({ open , setOpen}) => {
    return (
        <Ul open={open}>
            <li onClick={() => setOpen(!open)}>
                <Nav.Link href="#home">Home</Nav.Link>
            </li>
            <li onClick={() => setOpen(!open)}>
                <Nav.Link href="#whatWeDo">What we do?</Nav.Link>
            </li>
            <li onClick={() => setOpen(!open)}>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </li>
            <li onClick={() => setOpen(!open)}> 
                <Nav.Link href="aboutUs">About Us</Nav.Link>
            </li>
            
        </Ul>

        // <Ul open={open}>
        //     {/* <li>Home</li>
        //     <li>What we do?</li>
        //     <li>Portfolio</li>
        //     <li>About Us</li> */}
        // </Ul>
    );
};

export default RightNav;
