import qs from "qs";
import axios from "axios";

export const getToken = (url, data) => {
  return axios
    .post(url, qs.stringify(data))
    .then((res) => {
      let parser = new DOMParser();
      let xmlFile = parser.parseFromString(res.data, "text/xml");
      // console.log(
      //   xmlFile.getElementsByTagName("description")[0].childNodes[0].nodeValue
      // );
      return xmlFile.getElementsByTagName("description")[0].childNodes[0]
        .nodeValue;
    })
    .catch((error) => {
      return error;
    });
};
