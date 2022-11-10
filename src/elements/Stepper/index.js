import React, { useState } from "react";

import PropTypes from "prop-types";

export default function index() {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? intialStep : stepKeys[0]
  );
  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(CurrentStep);

  function prevstep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }
  function nextstep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }

  return <>({props.children(prevstep, nextstep, CurrentStep, steps)})</>;
}

Stepper.PropTypes = {
  data: PropTypes.object.isRequired,
  initialStep: PropTypes.string.isRequired,
};
