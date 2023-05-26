import Nav from "../Nav/Nav";
import md from "./MenuDescription.module.css";
import { Context } from "../context";

import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";

function MenuDescription(props) {
  const { id } = useParams();

  return (
    <div className={md.MenuDescription}>
      <Nav />
      <div className="content">
        <p className="title">Menu</p>
        <div className="hr"></div>

        <div className={md.menuDescription}>
          <div key={id}>
            <img src={props.menu[id].strCategoryThumb} alt="img" />
            <p>
              <span>Описание:</span> <br />
              {props.menu[id].strCategoryDescription}
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
