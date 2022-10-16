/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Close</VisuallyHidden>
            <Icon id="close" />
          </UnstyledButton>
        </CloseButtonWrapper>

        <div style={{ flex: 2, display: "flex", alignItems: "flex-end" }}>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </div>
      </Content>
    </Overlay>
  );
};

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-size: 0.9rem;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
  padding-left: 75px;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Content = styled(DialogContent)`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  height: 100%;
  padding-left: 32px;
`;

export default MobileMenu;
