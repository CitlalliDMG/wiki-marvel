const BASE_URL = "https://randomuser.me/api";

class api {
  fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      return data;
    } catch (e) {
      let message = e;
      return message;
    }
  };
}

export default new api();
