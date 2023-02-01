import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: none;
    li {
        padding: 18px 10px;
        margin-top: 26px;
    }

    @media (max-width: 920px) {
        z-index: 100;
        display: flex;
        flex-flow: row nowrap;
        flex-flow: column nowrap;
        background-color: #0c011e;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100%;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
    }
`;

const RightNav = ({ open, setOpen }) => {
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
            <li onClick={() => setOpen(!open)}>
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.9865 0.666687C6.6265 0.666687 0.666504 6.64002 0.666504 14C0.666504 21.36 6.6265 27.3334 13.9865 27.3334C21.3598 27.3334 27.3332 21.36 27.3332 14C27.3332 6.64002 21.3598 0.666687 13.9865 0.666687ZM23.2265 8.66669H19.2932C18.8759 7.0153 18.2579 5.42121 17.4532 3.92002C19.8853 4.75736 21.9347 6.44232 23.2265 8.66669ZM13.9998 3.38669C15.1065 4.98669 15.9732 6.76002 16.5465 8.66669H11.4532C12.0265 6.76002 12.8932 4.98669 13.9998 3.38669ZM3.67984 16.6667C3.4665 15.8134 3.33317 14.92 3.33317 14C3.33317 13.08 3.4665 12.1867 3.67984 11.3334H8.1865C8.07984 12.2134 7.99984 13.0934 7.99984 14C7.99984 14.9067 8.07984 15.7867 8.1865 16.6667H3.67984ZM4.77317 19.3334H8.7065C9.13317 21 9.7465 22.6 10.5465 24.08C8.11179 23.2473 6.06095 21.5611 4.77317 19.3334ZM8.7065 8.66669H4.77317C6.06095 6.43892 8.11179 4.75278 10.5465 3.92002C9.74174 5.42121 9.12381 7.0153 8.7065 8.66669ZM13.9998 24.6134C12.8932 23.0134 12.0265 21.24 11.4532 19.3334H16.5465C15.9732 21.24 15.1065 23.0134 13.9998 24.6134ZM17.1198 16.6667H10.8798C10.7598 15.7867 10.6665 14.9067 10.6665 14C10.6665 13.0934 10.7598 12.2 10.8798 11.3334H17.1198C17.2398 12.2 17.3332 13.0934 17.3332 14C17.3332 14.9067 17.2398 15.7867 17.1198 16.6667ZM17.4532 24.08C18.2532 22.6 18.8665 21 19.2932 19.3334H23.2265C21.9347 21.5577 19.8853 23.2427 17.4532 24.08ZM19.8132 16.6667C19.9198 15.7867 19.9998 14.9067 19.9998 14C19.9998 13.0934 19.9198 12.2134 19.8132 11.3334H24.3198C24.5332 12.1867 24.6665 13.08 24.6665 14C24.6665 14.92 24.5332 15.8134 24.3198 16.6667H19.8132Z"
                        fill="#E8D8F0"
                    />
                </svg>
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
