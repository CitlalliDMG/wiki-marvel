import crypto from "crypto-js";
import configuration from "../config/config";

const URL = () => {
  const BASE_URL_1 = "https://gateway.marvel.com:443/v1/public/";
  const QUERY = "comics?format=comic&formatType=comic&dateDescriptor=thisWeek";
  const timestamp = new Date().getTime();
  const HASH = crypto.MD5(
    timestamp + configuration.privateKey + configuration.publicKey
  );
  const AUTH = `&ts=${timestamp}&apikey=${
    configuration.publicKey
  }&hash=${HASH}`;
  console.log(AUTH);
  return `${BASE_URL_1}${QUERY}${AUTH}`;
};

const urlTitle = (title, offset) => {
  const BASE_URL_1 = "https://gateway.marvel.com:443/v1/public/";
  const QUERY = `comics?format=comic&formatType=comic&noVariants=true&title=${title}&orderBy=-onsaleDate&limit=10&offset=${offset}`;
  const timestamp = new Date().getTime();
  const HASH = crypto.MD5(
    timestamp + configuration.privateKey + configuration.publicKey
  );
  const AUTH = `&ts=${timestamp}&apikey=${
    configuration.publicKey
  }&hash=${HASH}`;
  return `${BASE_URL_1}${QUERY}${AUTH}`;
};

class api {
  fetchData = async () => {
    try {
      const response = await fetch(URL());
      const rawData = await response.json();
      const data = rawData.data.results;
      return data;
    } catch (e) {
      let message = e;
      return message;
    }
  };
  getByTitle = async title => {
    try {
      const response = await fetch(urlTitle(title, 0));
      const rawData = await response.json();
      const data = rawData.data;
      console.log(data);
      return data;
    } catch (e) {
      let message = e;
      return message;
    }
  };
  newEntry = dataCollection => {
    try {
      console.log(dataCollection);
      return dataCollection;
    } catch (e) {
      return e;
    }
  };
}

export default new api();
