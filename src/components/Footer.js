import React from "react";
import { FaPhoneSquare } from "react-icons/fa";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <Hotline href="tel:+84904513751">
        <FaPhoneSquare color="white" fontSize={20} />
        <p>Hotline: 0904.513.751</p>
      </Hotline>
      <Wrapper>
        <div>

          <h5>
            &copy; {new Date().getFullYear()}
            <span> AlmogWer</span>
          </h5>
          <h5>All rights reserved</h5>
        </div>
      </Wrapper>
    </>
  );
};

const Hotline = styled.a`
  display: flex;
  gap: 12px;
  align-items: center;
  background: hsl(360, 67%, 44%);
  margin: 32px 32px 32px auto;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 10px;
  p {
    color: white;
    margin: 0;
    font-size: 20px;
  }
`

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
