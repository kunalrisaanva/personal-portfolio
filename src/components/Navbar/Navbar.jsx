import React from 'react'
import { Link as LinkR } from 'react-router-dom';
import styled from '@emotion/styled/macro'



const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;


const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`;


const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const GitHubButton = styled.button`
  background-color:transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  
  cursor: pointer;
  height: 70%;
  
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_light};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 0.8rem;
    }
`;







function Navbar() {
  return( 
  
  <Nav>
    <NavbarContainer>

        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
            <NavLink>Home</NavLink>
        </NavItems>
        <ButtonContainer>
            <GitHubButton>
                Github Profile
            </GitHubButton>
        </ButtonContainer>
    </NavbarContainer>
    </Nav>
  )}

export default Navbar