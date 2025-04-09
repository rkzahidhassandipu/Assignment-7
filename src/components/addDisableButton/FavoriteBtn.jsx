import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const FavoriteBtn = ({product, handleFavoriteProducts}) => {

    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(true);
        handleFavoriteProducts(product);
        toast.success("Added to favorites! ❤️");
    }


  return (
    <>
      <button onClick={handleClick} className="cursor-pointer text-2xl disabled:cursor-not-allowed" disabled={checked}>
        {
            checked ? (
                <FaHeart className="w-full text-red-500" />
            ) : (
                <FaRegHeart className="w-full" />
            )
        }
      </button>
      
    </>
  )
}

export default FavoriteBtn
