import React, { useState } from "react";
import { Home } from "./pages/home/Home";
import { Postulantes } from "./pages/postulantes/Postulantes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  CNavItem,
  CNavLink,
  CNavbarToggler,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CFooter,
  CLink
} from "@coreui/react";

import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">Entrevista</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="/" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/postulantes">Postulantes</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/postulantes" exact element={<Postulantes />}></Route>
        </Routes>
      </BrowserRouter>

      <CFooter className="footer_postulantes">
        <div>
          <CLink href="https://github.com/programacion315">Jorge H </CLink>
          <span>&copy; 2022 Entrevista.</span>
        </div>
      </CFooter>
    </div>
  );
}

export default App;
