// write product card here
import React from "react";
import ViewProductButton from "./button.jsx"; 

const Productcard = () => {
  const productImage =
    "https://i5.walmartimages.com/asr/cdf2dcc6-6968-4739-8508-eb8e530f638f_1.a878cce0c6552705386dbe7407c723ef.jpeg";
  const productName = "Monitors";
  const price = "$299.99";

  return (
    <div className="w-72 border border-gray-300 rounded-lg shadow-md p-4 text-center mx-auto">
      <img
        src={productImage}
        alt="Product"
        className="w-full h-52 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-4">{productName}</h2>
      <p className="text-gray-700 text-md mt-2">{price}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
