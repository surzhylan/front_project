import Nav from "../Nav/Nav";
import md from "./MenuDescription.module.css";
import { Context } from "../context";

import React, { useContext, useEffect, useState, useRef } from "react";
import { Navigate, useParams, Link } from "react-router-dom";

function MenuDescription(props) {
  const { id } = useParams();

  const prevPropsRef = useRef(props);
  useEffect(() => {
    console.log("Component MenuDescription DidMount");

    return () => {
      console.log("Component  MenuDescription unmounted");
    };
  });

  useEffect(() => {
    if (prevPropsRef.current.menu !== props.menu) {
      console.log("Компонент  MenuDescription updated");
    }

    prevPropsRef.current = props;
  });


  return (
    <div className={md.MenuDescription}>
      <Nav />
      <div className="content">
        <p className="title">Menu</p>
        <div className="hr"></div>

        <div className={md.menuDescription}>
          <div key={id}>
            <img src={props.menu[id-1].strCategoryThumb} alt="img" />
            <p>
              <span>Description:</span> <br />
              {props.menu[id-1].strCategoryDescription}
            </p>
          </div>

          <Link to="/menu">
            {" "}
            <button className={md.btn}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuDescription;
