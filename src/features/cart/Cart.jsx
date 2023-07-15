import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  selectItem,
  updateItemAsync,
} from "./cartSlice";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import { discountedPrice } from "../../app/constants";

export default function Cart() {
  const items = useSelector(selectItem);
  const totalAmount = items.reduce(
    (amount, item) => discountedPrice(item) * item.quantity + amount,
    0
  );
  const totalItems = items.reduce(
    (total, item) => item.quantity * total + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleQuantity = (e, item) => {
    dispatch(updateItemAsync({ ...item, quantity: e.target.value }));
  };

  const handleRemove = (itemId) => {
    dispatch(deleteItemFromCartAsync(itemId));
  };

  return (
    <>
      {!items.length && <Navigate to="/" replace={true} />}
      <div className="mx-auto mt-12 max-w-4xl sm:px-8 lg:px-10 bg-white rounded-xl p-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Cart{" "}
        </h1>{" "}
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 border-t border-gray-200 mt-6">
          <div className="flow-root">
            <ul role="list" className=" divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6 ">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.href}>{item.title}</a>
                        </h3>
                        <p className="ml-4">${discountedPrice(item)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500 ">
                        <label
                          htmlFor="quantity"
                          className="inline text-sm font-medium text-left leading-6 text-gray-900"
                        >
                          Qty
                        </label>
                        <select
                          className="mx-4 rounded-lg"
                          onChange={(e) => handleQuantity(e, item)}
                          value={item.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          onClick={() => handleRemove(item.id)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 border-t border-gray-200 ">
          <div className="flex justify-between text-base font-medium text-gray-900 mt-6">
            <p>Subtotal</p>
            <p>$ {totalAmount}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900 ">
            <p>Total Items In Cart</p>
            <p>{totalItems} items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500 text-left">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
