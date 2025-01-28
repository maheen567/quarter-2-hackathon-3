'use client'
import { getCartItems } from "@/app/actions/actions";
import TopHeader from "@/Components/TopHeader/TopHeader";
import { urlFor } from "@/sanity/lib/image";
import { Food } from "@/types/foods";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const page = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    company: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
    company: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      zipCode: !formValues.zipCode,
      address: !formValues.address,
      city: !formValues.city,
      company: !formValues.company,
    };
    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const placeOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    }
  };

  const placeOrderBTN = () => {
    toast.success("Order has been placed successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <section>
      <div>
        <TopHeader
          title="CheckOut Page"
          link1="Home"
          link2="Checkout"
          link3="/checkout"
        />
      </div>

      <div className="py-[100px] md:px-[7%] px-[3%] max-w-screen-xl mx-auto ">
        <form>
          <div className="bg-white text-black ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Portion */}
              <div className="lg:col-span-2">
                <h2 className="text-[20px] font-bold font-inter mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      First name
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      
                    />
                    {formErrors.firstName && (
                      <p className="text-sm text-red-500">
                        First Name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      
                    />
                    {formErrors.lastName && (
                      <p className="text-sm text-red-500">
                        Last Name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.email}
                      onChange={handleInputChange}
                      
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500">Email is required</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.phone}
                      onChange={handleInputChange}
                    
                    />
                    {formErrors.phone && (
                      <p className="text-sm text-red-500">
                        Phone number is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.company}
                      onChange={handleInputChange}
                    />
                    {formErrors.company && (
                      <p className="text-sm text-red-500">
                        Company is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Country
                    </label>
                    <select
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      required
                    >
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      City
                    </label>
                    <select
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                    >
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Sukkar">Sukkar</option>
                      <option value="Faisalabad">Faisalabad</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Zip code
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.zipCode}
                      onChange={handleInputChange}
                      
                    />
                    {formErrors.zipCode && (
                      <p className="text-sm text-red-500">
                        Zip Code is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Address 1
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.address}
                      onChange={handleInputChange}
                      
                    />
                    {formErrors.address && (
                      <p className="text-sm text-red-500">
                        Address is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-[20px] font-bold font-inter mb-4">
                    Billing Address
                  </h2>
                  <div className="mt-4">
                    <div className="inline-flex items-center cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        id="address"
                        className=" text-black"
                        checked
                      />
                      <p>Same as shipping address</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Link
                    href={"/cart"}
                    className="flex items-center justify-center gap-1 text-black px-6 py-[10px] border border-solid border-gray-300 cursor-pointer"
                  >
                    <FaAngleLeft size={24} className="text-gray-500" />
                    Back to cart
                  </Link>
                  <button
                  onClick={placeOrder}
                  className="flex items-center text-base justify-center gap-1 bg-csYellow text-white px-6 py-[10px] cursor-pointer hover:bg-orange-500 transition-colors duration-200">
                    Proceed to shipping
                    <FaAngleRight size={24} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Right Portion */}
              <div className="p-6 rounded border border-solid border-gray-300">
                <div className="space-y-4 h-auto overflow-y-auto scrollbar-thin">
                  <h2 className="font-bold font-inter text-2xl">
                    Order Summary
                  </h2>

                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div key={item._id}>
                        <div className="flex items-center gap-1">
                          {item.image && (
                            <Image
                              src={urlFor(item.image).url()}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="w-20 h-20"
                            />
                          )}
                          <div className="ml-2 flex flex-col gap-2">
                            <h2 className="font-bold text-[16px] font-inter">
                              {item.name}
                            </h2>
                            <p className="text-gray-500 text-sm">
                              ${item.quantity} x ${item.price}
                            </p>
                            <p className="text-gray-500 text-sm">
                              <b>Subtotal:</b>${item.price * item.quantity}
                            </p>
                          </div>
                        </div>

                        <hr className="w-full my-4 h-[2px]" />
                      </div>
                    ))
                  ) : (
                    <p>No items found in your cart</p>
                  )}
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Subtotal</p>
                    <p className="text-gray-800 text-base">${subTotal}</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Shipping</p>
                    <p className="text-gray-800 text-base">Free</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Discount</p>
                    <p className="text-gray-800 text-base">${discount}</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Tax</p>
                    <p className="text-gray-800 text-base">$0</p>
                  </div>
                </div>
                <hr className="w-full my-4 h-[2px]" />

                <div className="flex justify-between pt-3 text-[18px] text-csBlack">
                  <p>Total</p>
                  <p className="font-bold">${subTotal}</p>
                </div>

                <button
                  onClick={placeOrderBTN}
                  className="group flex items-center justify-center gap-2 mt-6 bg-csYellow text-white text-[18px] w-full py-3 rounded cursor-pointer hover:bg-orange-500"
                >
                  Place an order
                  <FaArrowRightLong
                    size={20}
                    className="group-hover:translate-x-2 transition-all duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
