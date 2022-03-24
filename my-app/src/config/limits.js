export const allBetsColor = (value) => {
  if (value > 20) {
    return "green";
  } else return "grey";
};
export const allBetsLimits = (value, type, limits) => {
  if (type === 13) {
    return value >= limits[3].min;
  } else if (type === 23) {
    return value >= limits[5].min;
  }
};
export const allBetsAmount = (value, type, limits) => {
  if (type === 13 && value >= limits[3].max) {
    return limits[3].max;
  } else if (type === 23 && value >= limits[5].max) {
    return limits[5].max;
  } else return value;
};
