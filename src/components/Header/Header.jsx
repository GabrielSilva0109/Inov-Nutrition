import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`

const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  margin: 0 10px;
`

const NavLink = styled(Link)(({ isActive }) => `
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  transition: 0.5s;
  position: relative;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  ${isActive && `
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
      border-radius: 10px;
      position: absolute;
      bottom: -4px;
      transition: 0.5s;
      left: 0;
    }
  `}
`)

const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    padding: 15px;
    left: 0;
    width: 100%;
    z-index: 10;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra suave */
    color: white;
    backdrop-filter: blur(5px);
`

const MobileNavItem = styled.div`
  margin: 10px 0;
`

const MobileNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  transition: 0.5s;
  &:hover {
    color: #1e30f3;
  }
`

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`

const Header = ({ toggleTheme, theme }) => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const isActiveLink = (pathname) => pathname === location.pathname

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Container>
      <Title>Inov Nutrition</Title>
      <MenuIcon onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </MenuIcon>
      <Nav>
        <NavItem>
          <NavLink to="/" isActive={isActiveLink('/')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sobre" isActive={isActiveLink('/sobre')}>Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/produtos" isActive={isActiveLink('/produtos')}>Produtos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contato" isActive={isActiveLink('/contato')}>Contato</NavLink>
        </NavItem>
      </Nav>
      <MobileMenu style={{ display: showMenu ? 'flex' : 'none' }}>
        <MobileNavItem>
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/sobre" onClick={toggleMenu}>Sobre</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/produtos" onClick={toggleMenu}>Produtos</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/contato" onClick={toggleMenu}>Contato</MobileNavLink>
        </MobileNavItem>
      </MobileMenu>
    </Container>
  )
}

export default Header