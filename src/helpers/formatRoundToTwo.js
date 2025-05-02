const roundToTwo = (num) => {
  return (+(Math.round(num + "e+2") + "e-2")).toFixed(2);
};

export default roundToTwo;
