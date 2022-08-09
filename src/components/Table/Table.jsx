import React from "react";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import LightText from "../LightText";
import "./Table.css";
import Madrid from "../../assets/AccountPage/Madrid.png";
import TableOutcome from "./TableOutcome";

const Table = ({ content }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>
              <LightText lightText="ID" customStyle={{ fontSize: "12px" }} />{" "}
            </th>
            <th>
              <LightText
                lightText="MARKET"
                customStyle={{ fontSize: "12px" }}
              />{" "}
            </th>
            <th>
              <LightText
                lightText="OUTCOME"
                customStyle={{ fontSize: "12px" }}
              />{" "}
            </th>
            <th>
              <LightText lightText="ODDS" customStyle={{ fontSize: "12px" }} />{" "}
            </th>
            <th>
              <LightText lightText="STAKE" customStyle={{ fontSize: "12px" }} />{" "}
            </th>
            <th>
              <LightText
                lightText="PLACED ON"
                customStyle={{ fontSize: "12px" }}
              />{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {content && content.map((item, index) => (
            <tr key={index}>
              <td>
                <LightText lightText={item.id} customStyle={{ fontSize: "14px" }} />
              </td>
              <td>
                <HomePageTitle
                  title={item.Market}
                  customStyle={{ fontWeight: "500", fontSize: "14px" }}
                />
              </td>
              <td>
                <TableOutcome active={item.Active} logo={Madrid} text={item.Outcome} />
              </td>
              <td>
                <LightText
                  lightText={item.Odds}
                  customStyle={{ fontSize: "14px" }}
                />
              </td>
              <td>
                <LightText
                  lightText={item.Stake}
                  customStyle={{ fontSize: "14px" }}
                />
              </td>
              <td>
                <LightText
                  lightText={item.PlacedOn}
                  customStyle={{ fontSize: "14px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
