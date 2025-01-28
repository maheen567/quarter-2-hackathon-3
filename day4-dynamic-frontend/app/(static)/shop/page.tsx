"use client";

import {
  addToCart,
  addToWishlist,
  getWishlistItems,
  removeFromWishlist,
} from "@/app/actions/actions";
import Categories from "@/Components/Categories/Categories";
import LatestProducts from "@/Components/LatestProducts/LatestProducts";
import ProductTags from "@/Components/ProductTags/ProductTags";
import TopHeader from "@/Components/TopHeader/TopHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allFoods } from "@/sanity/lib/queries";
import { Food } from "@/types/foods";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";

export const handleAddToCart = (e: React.MouseEvent, product: Food): void => {
  e.preventDefault();
  addToCart(product);
  toast.success(`${product.name} is added to cart successfully!`, {
    position: "bottom-right",
    pauseOnHover: false,
    theme: "colored",
    transition: Bounce,
  });
};

const page = () => {
  const [food, setFood] = useState<Food[]>([]);
  const [wishlist, setWishlist] = useState<Food[]>([]);

  useEffect(() => {
    async function getFood() {
      const fetchedFood: Food[] = await client.fetch(allFoods);
      setFood(fetchedFood);
      setWishlist(getWishlistItems());
    }
    getFood();
  }, []);

  const handleAddToWishlist = (e: React.MouseEvent, product: Food) => {
    e.preventDefault();
    const isInWishlist = wishlist.find((item) => item._id === product._id);

    if (isInWishlist) {
      removeFromWishlist(product._id);
      toast.success(`${product.name} is removed from wishlist`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      addToWishlist(product);
      toast.success(`${product.name} is added to wishlist successfully!`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
      setWishlist([...wishlist, product]);
    }
  };

  const isProductInWishlist = (productId: number) => {
    return wishlist.some((item) => item._id === productId);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Food): void => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} is added to cart successfully!`, {
      position: "bottom-right",
      pauseOnHover: false,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <section>
      <TopHeader title="Our Shop" link1="Home" link2="Shop" link3="/shop" />

      <div className="flex flex-col lg:flex-row px-6 md:px-[7%] lg:px-12 py-[50px] md:py-[100px] lg:space-x-5 space-y-8 lg:space-y-0">

        {/* Left Portion */}
        <div className="w-full lg:w-[70%] space-y-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
          lg:gap-7 lg:w-[100%] mb-5"
          >
            {food.map((item) => (
              <div
                key={item._id}
                className="relative rounded-lg border border-solid  border-gray-200 hover:border-gray-500 transition-colors duration-200 "
              >
                {/* Product Card */}
                <Link href={`/shop/${item.slug.current}`}>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      className='w-full h-[420px] sm:h-[350px] lg:h-[244px] object-cover rounded-[6px] rounded-b-none cursor-pointer mb-2"'
                      width={1000}
                      height={1000}
                    />
                  )}

                  <div className="flex flex-col items-center p-2">
                    <h1 className="font-bold text-lg text-[#1f2937] font-inter ">
                      {item.name}
                    </h1>
                    <p className="text-sm font-inter text-[#2a2a2a]">
                      &#36;{item.originalPrice}
                    </p>
                  </div>
                </Link>

                {/* Add To Cart & Wishlist Button */}
                <div className="mx-auto flex items-center justify-center px-2 pb-2 gap-3">
                  <button
                    className="py-2 px-4 bg-csYellow text-white whitespace-nowrap text-sm flex items-center gap-1 shadow-md hover:shadow-lg hover:bg-orange-500"
                    onClick={(e) => {
                      handleAddToCart(e, item);
                    }}
                  >
                    <FaShoppingCart size={15} />
                    Add to cart
                  </button>

                  <button
                    className={`bg-csYellow text-center rounded-full w-10 h-10 p-0 border-0 flex items-center justify-center                      
                      ${isProductInWishlist(item._id) ? "bg-red-500" : "text-white"}
                      `}
                    onClick={(e) => handleAddToWishlist(e, item)}
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Portion */}
        <div className="w-full lg:w-[30%]">
          <aside className="px-4">

            {/* Search Area */}
            <div className="mb-6">
              <div className="relative flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full border border-solid border-gray-300  h-[50px] py-2 px-4 text-sm placeholder-[#cfcccc] focus:outline-none focus:border-csYellow"
                />
                <button className="flex items-center justify-center absolute top-0 right-0 h-[50px] w-[50px] bg-csYellow cursor-pointer">
                  <FiSearch size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Latest Products */}
            <LatestProducts />

            {/* Product Tags */}
            <ProductTags />

            {/* Ctageories */}
            <Categories />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default page;
