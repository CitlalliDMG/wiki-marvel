import React from "react";

import CollectionSummary from "./CollectionSummary";

const CollectionList = ({ collections }) => {
  return (
    <div className="collection-list">
      {collections &&
        collections.map((collection, index) => {
          let id = collection.id;
          if (isNaN(id)) {
            id = index + 1;
          }
          return <CollectionSummary collection={collection} key={id} />;
        })}
    </div>
  );
};

export default CollectionList;
