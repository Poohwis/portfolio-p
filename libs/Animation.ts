export const heroDropDown = {
  initial: {
    y: "-50%",
    opacity: 0,
  },
  open: {
    y: "0%",
    opacity: 100,
    transition: {
      y: { duration: 0.5, damping: 10, stiffness: 200, type: "spring" },
      opacity: { duration: 0.5 },
    },
  },
};

export const slideUp = {
  initial: { y: "100%", opacity: 0 },
  open: {
    y: "0%",
    opacity: 100,
    transition: {
      y: { duration: 0.7 },
      opacity: { duration: 1 },
    },
  },
};

export const slideUpSingle = {
  initial: { y: "100%", opacity: 0 },
  open: (i : number) => ({
    y: "0%",
    opacity: 100,
    transition: {
      y: { duration: 0.7 , delay: 0.1 * i},
      opacity: { duration: 1 },
    },
  }),
};

export const slideRightNav = {
    initial: { opacity: 0, y: "-10%" },
    open: {
      opacity: 100,
      y: "0%",
      transition: {
        opacity: { duration: 1, delay: 1 },
        y: { duration: 1.2, delay: 1,  },
      },
    },
  };