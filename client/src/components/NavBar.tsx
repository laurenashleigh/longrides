import { ListItem, SpacedContainer, StyledLink } from "./Common.styles";
import { FaUser, FaBicycle, FaMap, FaPlus, FaEnvelope } from "react-icons/fa";
import { NavBarIcon, NavBarContainer, NavItem, NavBarText } from "./NavBar.styles";

interface NavBarItemProps {
    linkTitle: string;
    linkPath: string;
}

const NavBarItem = ({ linkTitle, linkPath }: NavBarItemProps) => {
    return (
        <ListItem>
            <StyledLink to={linkPath}>{linkTitle}</StyledLink>
        </ListItem>
    );
}

const NavBar = () => {
    return (
        // <SpacedContainer>
        //     <NavBarItem linkTitle="Home" linkPath="/" />
        //     <NavBarItem linkTitle="My Profile" linkPath="/profile" />
        //     <NavBarItem linkTitle="My Tours" linkPath="/map" />
        //     <NavBarItem linkTitle="Add Log" linkPath="/add" />
        //     <NavBarItem linkTitle="My Stats" linkPath="/statistics" />
        // </SpacedContainer>
        <NavBarContainer>
        <NavItem to="/profile">
          <NavBarIcon>
            <FaUser />
          </NavBarIcon>
          <NavBarText>Profile</NavBarText>
        </NavItem>
        <NavItem to="/map">
          <NavBarIcon>
            <FaMap />
          </NavBarIcon>
          <NavBarText>Map View</NavBarText>
        </NavItem>
        <NavItem to="/tours">
          <NavBarIcon>
            <FaBicycle />
          </NavBarIcon>
          <NavBarText>My Tours</NavBarText>
        </NavItem>
        <NavItem to="/add">
          <NavBarIcon>
            <FaPlus />
          </NavBarIcon>
          <NavBarText>Log Tour</NavBarText>
        </NavItem>
        <NavItem to="/messages">
          <NavBarIcon>
            <FaEnvelope />
          </NavBarIcon>
          <NavBarText>Messages</NavBarText>
        </NavItem>
      </NavBarContainer>
)}

export default NavBar;