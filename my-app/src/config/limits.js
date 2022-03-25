export const allBetsColor = (value) => {
  if (value > 20) {
    return "green";
  } else return "grey";
};

export const totalBetAmountLimits = (totalBetsAmount) => {
  return totalBetsAmount >= 10000 ? 10000 : totalBetsAmount;
};

export const allBetsLimits = (value, type, limits) => {
  switch (type) {
    case 58:
      return value >= limits[7].min;
    case 0:
      return value >= limits[0].min;
    case 37:
      return value >= limits[1].min;
    case 97:
      return value >= limits[2].min;
    case 111:
      return value >= limits[3].min;
    case 134:
      return value >= limits[4].min;
    case 145:
      return value >= limits[5].min;
    case 148:
      return value >= limits[6].min;
    case 151:
      return value >= limits[8].min;
    case 157:
      return value >= limits[9].min;
    default:
      return value;
  }
};
export const allBetsAmount = (value, type, limits, totalBetsAmount, amount) => {
  switch (type) {
    case 58:
      return value >= limits[7].max ? limits[7].max : value;
    case 0:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[1].max
        ? limits[0].max
        : value;
    case 37:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[1].max
        ? limits[1].max
        : value;
    case 97:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[2].max
        ? limits[2].max
        : value;
    case 111:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[3].max
        ? limits[3].max
        : value;
    case 134:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[4].max
        ? limits[4].max
        : value;
    case 145:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[5].max
        ? limits[5].max
        : value;
    case 148:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[6].max
        ? limits[6].max
        : value;
    case 151:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[8].max
        ? limits[8].max
        : value;
    case 157:
      return totalBetsAmount >= 10000
        ? amount
        : value >= limits[9].max
        ? limits[9].max
        : value;
    default:
      return value;
  }
};
