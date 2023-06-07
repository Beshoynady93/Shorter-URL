export const renderBG = (desktopBG, mobilBG) => {
  const WindowWidth = screen.width;
  if (WindowWidth > 375) {
    return desktopBG;
  } else {
    return mobilBG;
  }
};
