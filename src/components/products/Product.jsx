import React from "react";
import FavoriteBtn from "../addDisableButton/FavoriteBtn";

const Product = ({product, handleFavoriteProducts}) => {
    const {title, image, currentBidPrice, timeLeft} = product;
  return (
    <>
      {/* row 1 */}
      <tr className="border-b-2 border-blue-50 py-3">
        <td className="flex items-center">
            <img className="w-40 mr-5 rounded-lg" src={image} alt="" />
            <h4 className="text-blue-900 font-semibold text-base">{title}</h4>
        </td>
        <td className="text-center text-blue-900 font-semibold text-base">$ {currentBidPrice}</td>
        <td className="text-center text-blue-900 font-semibold text-base">{timeLeft}</td>
        <td>
          <FavoriteBtn product={product} handleFavoriteProducts={handleFavoriteProducts} />
        </td>
      </tr>
      
    </>
  );
};

export default Product;
