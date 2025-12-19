// 반응형 사이즈

const size = {
  mobile: '375px',
  tablet: '744px',
  desktop: '1920px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};
