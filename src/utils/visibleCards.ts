export const enum BREAKPOINTS {
  DESKTOP = 1280,
  TABLET = 768,
  MOBILE = 450,
}

export const visibleCardsConfig = {
  [BREAKPOINTS.DESKTOP]: { total: 12, more: 3 },
  [BREAKPOINTS.TABLET]: { total: 8, more: 2 },
  [BREAKPOINTS.MOBILE]: { total: 5, more: 2 }
}

export const getVisibleConfig = (width: number) => {
  if (width > 1100 && width <= 1400) {
    return visibleCardsConfig[BREAKPOINTS.DESKTOP]
  }

  if (width > BREAKPOINTS.MOBILE && width < 1100) {
    return visibleCardsConfig[BREAKPOINTS.TABLET]
  }

  return visibleCardsConfig[BREAKPOINTS.MOBILE]
}
