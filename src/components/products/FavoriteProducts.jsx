import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';


const FavoriteProducts = ({ favoriteProduct, removeFromFavorite }) => {
  const { id, image, title, currentBidPrice, bidsCount } = favoriteProduct;

  const [favorite, setFavorite] = useState(true);

  const handleRemove = () => {
    setFavorite(false)
    toast.success("Removed to favorites! ❌");
    removeFromFavorite(id)
  }
  
  if(!favorite) return null;

  return (
    <>
      <div className="grid grid-cols-7 items-center mx-3 py-5 border-b-2 border-blue-50">
            <div className="col-span-2">
                <img className="w-24 mr-5" src={image} alt="" />
            </div>
            <div className="col-span-4">
                <h4 className="text-blue-900 text-base">
                {title}
                </h4>
                <div className="grid grid-cols-2 py-3">
                    <h5 className="text-left text-blue-900 text-base">
                        $ {currentBidPrice}
                    </h5>
                    <h5 className="text-left text-blue-900 text-base">
                    Bids: {bidsCount}
                    </h5>
                </div>
            </div>
            <div className="col-span-1 text-right ">
                <TiDelete onClick={handleRemove} className="text-2xl text-center cursor-pointer" />
            </div>
        </div>
    </>
  );
};

export default FavoriteProducts;
