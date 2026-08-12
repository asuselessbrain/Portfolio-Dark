// Audio disabled: noop implementations to remove UI sounds while keeping imports stable
export const setMutedState = () => {
  // no-op
};

export const getMutedState = () => {
  return false;
};

export const playHoverSound = () => {
  // no-op
};

export const playClickSound = () => {
  // no-op
};

export const playGlitchSound = () => {
  // no-op
};

export const playSuccessSound = () => {
  // no-op
};

export const playStartupSound = () => {
  // no-op
};
