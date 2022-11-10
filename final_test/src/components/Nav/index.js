import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  padding: 20px 40px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
  background-color: white;
`;

const Logo = styled.div`
  color: gray;
  font-size: 26px;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const StyledLink = styled(Link)`
  color: #bcaade;
  text-decoration: none;
  margin: 0 14px;
  &:hover {
    color: gray;
  }
  font-size: 18px;
`;

const NavBar = () => {
  return (
    <Container>
      <Logo>
        <div>New Year Party Registration</div>
      </Logo>
      <nav>
        <StyledLink to="/">Members</StyledLink>
        <StyledLink to="/add">Registration</StyledLink>
      </nav>
    </Container>
  );
};

export default NavBar;
