import React from "react";
import { NavLink } from "react-router-dom";

import homeDefault from "/assets/home-default.svg";
import homeActive from "/assets/home-actived.svg";
import myerrandsDefault from "/assets/myerrands-default.svg";
import myerrandsActive from "/assets/myerrands-actived.svg";
import chatingDefault from "/assets/chating-default.svg";
import chatingActive from "/assets/chating-actived.svg";
import myinfoDefault from "/assets/myinfo-default.svg";
import myinfoActive from "/assets/myinfo-actived.svg";

const navItems = [
  {
    path: "/",
    text: "홈",
    defaultIcon: homeDefault,
    activeIcon: homeActive,
  },
  {
    path: "/myerrands",
    text: "내 심부름",
    defaultIcon: myerrandsDefault,
    activeIcon: myerrandsActive,
  },
  {
    path: "/chat",
    text: "채팅",
    defaultIcon: chatingDefault,
    activeIcon: chatingActive,
    gapClass: "gap-y-[2px]",
  },
  {
    path: "/myinfo",
    text: "내 정보",
    defaultIcon: myinfoDefault,
    activeIcon: myinfoActive,
  },
];

export default function NavigationBar() {
  return (
    <nav className="bg-white flex items-center justify-around shadow-card-shadow min-h-[83px]">
      <ul className="font-laundry text-center text-xs tracking-tight flex justify-between items-center gap-12 mt-3">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-gray-700 ${
                  isActive ? "font-bold text-primary-500" : ""
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center size-11 ${
                    item.gapClass || "gap-y-[5px]"
                  }`}
                >
                  <img
                    src={isActive ? item.activeIcon : item.defaultIcon}
                    alt={item.text}
                  />
                  <span>{item.text}</span>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
