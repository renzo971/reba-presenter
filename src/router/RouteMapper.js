import React from "react";
import { Route } from "react-router-dom";

import { DefaultLayout } from "../layouts";
import { routes } from "./routes";

export function RouteMapper() {
  return (
    <>
      {" "}
      {routes.map(({ key, layout: Layout = DefaultLayout, ...rest }) => {
        return <Layout key={key} {...rest} />;
      })}
      <Route>
        <h1>Not Found</h1>
      </Route>
    </>
  );
}
