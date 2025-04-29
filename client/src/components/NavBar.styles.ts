import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70px; 
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  transition: width 0.3s ease;
  overflow: hidden;

  &:hover {
    width: 200px; /* Expand on hover */
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const NavBarIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;
  padding-left: 20px;
`;

export const NavBarText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${NavBarContainer}:hover & {
    opacity: 1; /* Show text when navbar expands */
  }
`;