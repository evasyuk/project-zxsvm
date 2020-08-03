import React from "react";
import { render } from "react-dom";

import { createGlobalStyle } from "styled-components";

import TopWrapper from "./src/components/TopWrapper";
import Button from "./src/components/Button";

const target = document.querySelector("#app")
const GlobalStyles = createGlobalStyle`
  #root{height: 100vh}
`

render(
    <TopWrapper>
        <GlobalStyles />
        <Button />
    </TopWrapper>,
    target,
)
