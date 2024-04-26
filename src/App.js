import React from "react";
import "./globals.css";
import { Routes, Route, Outlet, Link, MemoryRouter } from "react-router-dom";
import { PresenterProvider } from "./providers/presenter";
import { ScripturesProvider } from "./providers/scriptures";
import { AnthemnsProvider } from "./providers";

import { Navbar } from "./components/navbar";

import AnthemnsView from "./views/anthemns/index";
import CastView from "./views/cast";
import HomeView from "./views/home";
import ScripturesView from "./views/scriptures";

import { ANTHEMNS_VIEW_PATH, BIBLE_VIEW_PATH, CAST_VIEW_PATH } from "./values";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./index.css";
export default function App() {
  return (
    <MemoryRouter>
      <PresenterProvider>
        <Navbar />
        <Routes>
          <Route
            path={BIBLE_VIEW_PATH}
            element={
              <ScripturesProvider>
                <ScripturesView />
              </ScripturesProvider>
            }
          ></Route>

          <Route
            path={ANTHEMNS_VIEW_PATH}
            element={
              <AnthemnsProvider>
                <AnthemnsView />
              </AnthemnsProvider>
            }
          ></Route>

          <Route path={CAST_VIEW_PATH} element={<CastView />}></Route>

          <Route path="/" element={<HomeView />}></Route>
        </Routes>
      </PresenterProvider>
    </MemoryRouter>
  );
}
