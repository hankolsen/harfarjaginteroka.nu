const getScreenRect = (element, screen) => {
  if (!element || !screen) {
    return {};
  }

  const elementRect = element.getBoundingClientRect();
  const screenRect = screen.getBoundingClientRect();

  return {
    top: elementRect.top - screenRect.top,
    left: elementRect.left - screenRect.left,
    width: elementRect.width,
    height: elementRect.height,
  }
};

export { getScreenRect };
