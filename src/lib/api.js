import crypto from "crypto-js";
import config from "../config";

// const BASE_URL = "https://randomuser.me/api";

const URL = () => {
  const BASE_URL_1 = "https://gateway.marvel.com:443/v1/public/";
  const QUERY = "comics?format=comic&formatType=comic&dateDescriptor=thisWeek";
  const timestamp = new Date().getTime();
  const HASH = crypto.MD5(timestamp + config.privateKey + config.publicKey);
  const AUTH = `&ts=${timestamp}&apikey=${config.publicKey}&hash=${HASH}`;
  console.log(AUTH);
  return `${BASE_URL_1}${QUERY}${AUTH}`;
};

class api {
  fetchData = async () => {
    try {
      // const response = await fetch(`${BASE_URL}`);
      // const data = await response.json();
      const response2 = await fetch(URL());
      const rawData = await response2.json();
      const data = rawData.data.results;
      // console.log(data);
      console.log(data);
      // return data;
      return data;
    } catch (e) {
      let message = e;
      return message;
    }
  };
}

export default new api();
