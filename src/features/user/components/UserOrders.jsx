import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectUserInfo, selectUserOrders } from "../UserSlice";

const UserOrders = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrders);

  useEffect(() => {
    console.log(user);
    dispatch(fetchLoggedInUserOrdersAsync(1));
  }, []);
  return (
    <>
      {orders?.map((order) => (
        <div>
          <div className="mx-auto mt-12 max-w-4xl sm:px-8 lg:px-10 bg-white rounded-xl p-6">
            <h1 className="text-2xl text-left font-bold tracking-tight text-gray-900">
              Order Number is: #{order.id}
            </h1>
            <h3 className="text-xl text-left font-bold tracking-tight text-gray-500 mt-2">
              Order Status is: {order.status}
            </h3>
            <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 border-t border-gray-200 mt-6">
              <div className="flow-root">
                <ul role="list" className=" divide-y divide-gray-200">
                  {order.items.map((item) => (
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
                            <p className="ml-4">${item.price}</p>
                          </div>
                          <p className="mt-1 text-left  text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500 ">
                            <label
                              htmlFor="quantity"
                              className="inline text-sm font-medium text-left leading-6 text-gray-900"
                            >
                              Qty :{item.quantity}
                            </label>
                          </div>

                          <div className="flex"></div>
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
                <p>$ {order.totalAmount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 ">
                <p>Total Items In Cart</p>
                <p>{order.totalItems} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 text-left">
                Shipping Address:
              </p>
              <div
                // key={orders.selectedAddress.phone}
                className="flex justify-between gap-x-6 py-5 p-4 bg-gray-100 mb-3 border-2 rounded-md"
              >
                <div className="flex gap-x-4">
                 
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {/* {orders.selectedAddress.name} */}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {/* {orders.selectedAddress.street} */}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {/* {orders.selectedAddress.pinCode} */}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {/* Phone: {orders.selectedAddress.phone} */}
                  </p>
                  <p className="text-sm leading-6 text-gray-900">
                    {/* {orders.selectedAddress.city} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserOrders;
