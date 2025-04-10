import React, { use, useEffect, useState } from "react";
import Product from "./Product";
import FavoriteProducts from "./FavoriteProducts";
import { FaRegHeart } from "react-icons/fa";
import NoFavorite from "../noFavarite/NoFavorite";

const Products = ({ fetchProducts }) => {
  const products = use(fetchProducts);

  const [addToFavorite, setAddToFavorite] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const handleFavoriteProducts = (product) => {
    const items = [...addToFavorite, product];
    setAddToFavorite(items);
  };


  useEffect(() => {
    const total = addToFavorite.reduce((acc, item) => acc + item.currentBidPrice, 0);
    setTotalPrice(total)
  }, [addToFavorite])

  const removeFromFavorite = (productId) => {
    const updatedFavorites  = addToFavorite.filter(item => item.id !== productId)
    setAddToFavorite(updatedFavorites)
  }
  

  return (
    <div className="bg-blue-50 py-20">
      <div className="w-4/5 mx-auto">
        <div>
          <h2 className="text-3xl text-blue-900 font-semibold">
            Active Auctions
          </h2>
          <p className="text-xl my-2">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex gap-6">
          <div className="overflow-x-auto flex-4/6 bg-white rounded-2xl my-6">
            <table className="table">
              {/* head */}
              <thead className="py-7">
                <tr className="border-b-2 border-blue-100 text-base">
                  <th>Items</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    handleFavoriteProducts={handleFavoriteProducts}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto flex-2/6 my-6">
            <div className="min-h-52 bg-white  rounded-2xl">
              {/* head */}
              <div className="text-3xl py-5 border-b-2 border-blue-50 text-blue-900 flex justify-center items-center">
                <span className="mr-3">
                  <FaRegHeart />
                </span>
                Favorite Items
              </div>
              <div className="">
                {
                  addToFavorite.length === 0 ? (
                    <NoFavorite />
                  ) : (
                    addToFavorite.map((favoriteProduct) => (
                      <FavoriteProducts
                        key={favoriteProduct.id}
                        favoriteProduct={favoriteProduct}
                        removeFromFavorite={removeFromFavorite}
                      />
                    ))
                  )
                }
              </div>
              <div className="flex justify-between text-2xl p-5">
                <span className="">Total bids Amount: </span>
                <span>$ {totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
