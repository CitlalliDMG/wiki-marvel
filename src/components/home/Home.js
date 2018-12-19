import React from "react";

import SearchField from "./SearchField";
import Comics from "./Comics";
import Loading from "./Loading";

const Home = () => {
  return (
    <div className="main-container">
      <SearchField />
      <Loading />
      <Comics />
    </div>
  );
};

export default Home;
