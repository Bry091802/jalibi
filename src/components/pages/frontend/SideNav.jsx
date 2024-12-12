import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const SideNav = ({ setCategory }) => {
  // const menus = [
  //     {
  //         img : '/nav-value-meal.webp',
  //         title: 'Value Meal',
  //     },
  //     {
  //         img : '/nav-chickenjoy.jpg',
  //         title: 'Chicken Joy',
  //     },
  //     {
  //         img : '/nav-burger-steak.webp',
  //         title: 'Burger Steak',
  //     },
  //     {
  //         img : '/nav-spaghetti.webp',
  //         title: 'Spaghetti',
  //     },
  //     {
  //         img : '/nav-palabok.webp',
  //         title: 'Palabok',
  //     },
  //     {
  //         img : '/nav-burger.webp',
  //         title: 'Burger',
  //     },
  //     {
  //         img : '/nav-desserts.webp',
  //         title: 'Desserts',
  //     },
  //     {
  //         img : '/nav-sides.webp',
  //         title: 'Sides',
  //     },
  // ]

  const handleGetCategory = (category) => {
    setCategory(category);
  };

  const {
    isFetching,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  return (
    <>
      <h5 className="mb-0 text-center pt-2 text-sm">Menu</h5>

      <ul>
        
        {result?.count > 0 &&
        result.data.map((item, key) => (
          <li className="mb-3" key={key}>
            <button onClick={() => handleGetCategory(item.category_title)}>
              <img src={`${imgPath}/${item.category_image}`} alt="" />
              <small className="text-xs">{item.category_title}</small>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideNav;
