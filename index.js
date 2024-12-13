import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";

sdñguiklñ,dfuihlkmñs,import Presentation from "./slides";

const CustomErrorReposdoñlfkñ{asljfñoidhgjdlfkbv,rter = ({ error }) => <Redbox error={ error } />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequiredxcfliñjvkc,.
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>xdfugljkmzl,.-
    <Presentation />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./slides", () => {
    const NextPresentation = require("./slides").default;    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
