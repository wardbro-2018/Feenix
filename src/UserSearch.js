import React from "react";
import "./UserSearch.css";


export default class UserSearch extends React.Component {
    state = { };
    render() {
      return (
        <div className="container text-center search-container">
        <h1 className="search-header">Feenix</h1>
        <p className="app-decription text-muted">My App Description</p>
        <div className="search-box">
        <div className="tab-content py-4 px-5">
        <div className="form-group">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <select className="form-control" placeholder="County">
          {[
            "County",
            "Antrim",
            "Armagh",
            "Carlow",
            "Cavan",
            "Clare",
            "Cork",
            "Derry",
            "Donegal",
            "Down",
            "Dublin",
            "Fermanagh",
            "Galway",
            "Kerry",
            "Kildare",
            "Kilkenny",
            "Laois",
            "Leitrim",
            "Limerick",
            "Longford",
            "Louth",
            "Mayo",
            "Meath",
            "Monaghan",
            "Offaly",
            "Roscommon",
            "Sligo",
            "Tipperary",
            "Tyrone",
            "Waterford",
            "Westmeath",
            "Wexford",
            "Wicklow"
          ]
          // transforms the array of counties to an array of <option>county</option>
          .map(county => (
            <option>{county}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
      <button className="btn btn-dark">Search</button>
      </div>
      </div>
      </div>
      </div>
      );
    }
}