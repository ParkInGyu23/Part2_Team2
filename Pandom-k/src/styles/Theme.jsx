// 반응형 사이즈

const size = {
  // mobile: '375px',
  mobile: '650px', // 아이폰 14 Pro Max, 15 Pro Max, 16 Pro Max, Plus
  tablet: '1023px',
  desktop: '1024px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
