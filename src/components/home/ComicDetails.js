import React from "react";

const ComicDetails = props => {
  const id = props.match.params.id;
  return <div>Aquí van los datos del comic {id}</div>;
};

export default ComicDetails;
