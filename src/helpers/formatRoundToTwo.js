const formatRoundToTwo = (num) =>
  (+(Math.round(num + "e+2") + "e-2")).toFixed(2);

export default formatRoundToTwo;
