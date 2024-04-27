import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Navbar, Routesbar, Settings } from "./components";
import {
  AnthemnsProvider,
  AppProvider,
  BirthdaysProvider,
  PresenterProvider,
  ScripturesProvider,
} from "./providers";
import { RouteMapper } from "./router";

import "react-bootstrap-typeahead/css/Typeahead.css";
import styled from "styled-components";
import "./assets/styles/custom.scss";
import "./assets/styles/index.css";
export default function App() {
  return (
    <AppProvider>
      <MemoryRouter>
        <PresenterProvider>
          <ScripturesProvider>
            <AnthemnsProvider>
              <BirthdaysProvider>
                <GridStyled>
                  {/* Nav */}
                  <Routesbar />
                  {/* Top navbar */}
                  <Navbar />
                  {/* Routes */}
                  <RouteMapper />
                  {/* Sidebar settings */}
                </GridStyled>
                <Settings />
              </BirthdaysProvider>
            </AnthemnsProvider>
          </ScripturesProvider>
        </PresenterProvider>
      </MemoryRouter>
    </AppProvider>
  );
}

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "navbar navbar"
    "routesbar content";
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
