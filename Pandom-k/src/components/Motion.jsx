// 모션 속성
export const inViewMotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: false, amount: 0.5 },
};

// 모션 fadeIn
export const fadeIn = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1.5 } },
};

// 모션 fadeInDown
export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// 모션 fadeInLeft
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// 모션 fadeInRight
export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// 모션 zoomIn
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.7 } },
};
