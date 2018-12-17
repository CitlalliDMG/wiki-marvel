import React from "react";

const CollectionSummary = ({ collection }) => {
  return (
    <article className="collection-info">
      <p className="bold-text"> Nombre de la colección: </p>
      <p className="text">{collection.collectionName}</p>
      <p className="bold-text"> Descripción: </p>
      <p className="text">{collection.description}</p>
      <p className="bold-text"> Número de cómics: </p>
      <p className="text">{collection.total}</p>
      <p className="bold-text"> Cómics en la colección: </p>
      {collection.comics.map(comic => {
        return (
          <p key={`${collection.collectionName} ${comic.id}`}>{comic.title}</p>
        );
      })}
    </article>
  );
};

export default CollectionSummary;
