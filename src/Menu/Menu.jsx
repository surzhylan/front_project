import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { Context } from "../context";
import m from "./Menu.module.css";

import React, { useContext, useEffect, useState, useRef } from "react";

function Menu(props) {
  const [value, setValue] = useState("");

  const contextValue = useContext(Context);
  console.log(contextValue);
  const prevPropsRef = useRef(props);
  useEffect(() => {
    console.log("Component  Menu DidMount");

    return () => {
      console.log("Component Menu unmounted");
    };
  });

  useEffect(() => {
    if (prevPropsRef.current.menu !== props.menu) {
      console.log("Компонент Menu обновлен");
    }

    prevPropsRef.current = props;
  });

  function changeTextInSearch(value) {
    setValue(value);
  }

  function clearSearchText() {
    setValue("");
  }

  let context = useContext(Context);

  return (
    <div className={m.Menu}>
      <Nav />
      <div className="content">
        <p className={m.title}>What We Offer</p>
        <p className={m.title2}>Curious? Here are our most popular menu items.</p>
        {/*<div className="hr"></div>*/}
        <div className={m.search}>
          <div className={m.form}>
            <input
              className={m.searchInput}
              value={value}
              placeholder="Searching"
              onChange={(e) => changeTextInSearch(e.target.value)}
            ></input>
            <button onClick={clearSearchText}>Clear</button>
          </div>
        </div>
        <div className={value == "" ? "" : "disable"}>
          <div className={m.menuList}>
            {props.menu.map((menuItem) => (
              <Link
                key={menuItem.idCategory}
                to={`/menuDescription/${menuItem.idCategory}`}
              >
                <div className={m.menuItem} key={menuItem.idCategory}>
                  <img src={menuItem.strCategoryThumb} alt="" />
                  <p>{menuItem.strCategory}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={value == "" ? "disable" : ""}>
          <div className={m.menuList}>
            {props.menu.map((menuItem) =>
              menuItem.strCategory.includes(value) ? (
                <Link
                  key={menuItem.idCategory}
                  to={`/menuDescription/${menuItem.idCategory}`}
                >
                  <div className={m.menuItem} key={menuItem.idCategory}>
                    <img src={menuItem.strCategoryThumb} alt="" />
                    <p>{menuItem.strCategory}</p>
                  </div>
                </Link>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
