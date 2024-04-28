import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onToggleGreased, onSortByName, onSortByWeight }) => {
  return (
    <div className="ui container">
      <div
        className="ui container row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2rem",
          paddingBottom: "1.85rem",
          borderBottom: "2px solid gray",
        }}
      >
        <div className="navWrapper ui grid">
          <div className="TwirlyPig">
            <span className="headerText">HogWild</span>
            <img
              src={piggy}
              className="App-logo"
              alt="piggy"
              style={{ height: "36px", width: "auto" }}
            />
          </div>
          <span className="normalText">
            A React App for County Fair Hog Fans
          </span>
        </div>
        <div className="ui container ">
          <button className="ui button" onClick={onToggleGreased}>
            Toggle Greased
          </button>
          <button className="ui button" onClick={onSortByName}>
            Sort by Name
          </button>
          <button className="ui button" onClick={onSortByWeight}>
            Sort by Weight
          </button>
          <button className="ui button">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
