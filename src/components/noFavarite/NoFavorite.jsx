import React from "react";

const NoFavorite = () => {
  return (
    <div className="border-b-2 border-blue-50 text-center py-7">
      <h1 className="text-2xl font-semibold mb-3">No favorites yet</h1>
      <p className="text-gray-600">
        Click the heart icon on any item <br /> to add it to your favorites
      </p>
    </div>
  );
};

export default NoFavorite;
