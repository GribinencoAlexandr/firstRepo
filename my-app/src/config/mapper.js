export const mapFirstReq = (data) => {
  //   console.log(data);
  return {
    chipColors: data.chipColors,
    mobileApiUrl: data.mobileApiUrl,
    preBetsAllowed: Boolean(Number(data.preBetsAllowed)),
    serverCommUrl: data.serverCommUrl,
  };
};
