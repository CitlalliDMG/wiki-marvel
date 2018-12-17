import React from "react";

import CollectionSummary from "./CollectionSummary";

const CollectionList = ({ collections }) => {
  return (
    <div className="collection-list">
      {collections &&
        collections.map(collection => {
          return (
            <CollectionSummary collection={collection} key={collection.id} />
          );
        })}
    </div>
  );
};

export default CollectionList;
