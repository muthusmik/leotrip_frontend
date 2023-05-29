import { BUSBOARDINGPOINT } from "../constants";

const loadBusBoardingpoint = (bus) => ({
  type:BUSBOARDINGPOINT.LOAD_BUSBOARDINGPOINT,
  bus,
});

const setBusBoardingpoint = (bus) => ({
  type:BUSBOARDINGPOINT.BUSBOARDINGPOINT_SUCCESS,
  bus,
});

const setError = (error) => ({
  type:BUSBOARDINGPOINT.BUSBOARDINGPOINT_FAIL,
  error,
});

export { loadBusBoardingpoint,setBusBoardingpoint, setError };
