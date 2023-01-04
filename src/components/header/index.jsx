/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./style.scss";
import logo from "@/assets/img/logo.png";

export default function Header(props) {
  const [selNavIndex, setSelNavIndex] = useState(0);
  const navList = [
    {
      id: "/",
      title: "网站首页",
    },
    {
      id: "introduce",
      title: "公司介绍",
    },
    {
      id: "product",
      title: "主营产品",
    },
    {
      id: "service",
      title: "战略合作",
    },
    {
      id: "team",
      title: "团队介绍",
    },
  ];
  const navClass = (index) => {
    return selNavIndex === index ? "active" : "";
  };
  const changeNav = (index) => {
    setSelNavIndex(index);
    if (navList[index].id === "/") {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else
      document
        .querySelectorAll(
          `.${navList[index].id}-box ${
            navList[index].id === "introduce" ? ".content-box" : ""
          }`
        )[0]
        .scrollIntoView();
  };
  return (
    <div className="header-box flex ai-c">
      <div className="content-box flex jc-sb">
        <img src={logo} alt="logo" />
        <ul className="flex ai-c jc-sb">
          {navList.map((nav, index) => (
            <li
              className={navClass(index)}
              onClick={changeNav.bind(this, index)}
              key={index}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
