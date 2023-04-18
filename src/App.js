import { NavLink, Route, Routes, useLocation } from "react-router-dom";

import NotFound from "./components/notFound";
import { lazy } from "react";

import styled from "styled-components";
import { Suspense } from "react";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #8436a3 54.28%,
    #4b2a99 78.99%
  );
  color: #ffffff;

  margin-bottom: 20px;
`;

const StyledLink = styled(NavLink)`
  color: #ffffff;
  padding: 30px;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
const Logo = styled.p`
  font-size: 40px;
  font-family: "Rubik Wet Paint";
  margin: 0;

  padding: 5px;
`;

const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

function App() {
  const locations = useLocation();
  return (
    <Container>
      <Nav>
        <StyledLink to="/"> Home </StyledLink>
        <Logo>follow me ...</Logo>
        <StyledLink to="/tweets" state={{ from: locations }}>
          {" "}
          Tweets{" "}
        </StyledLink>
      </Nav>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
