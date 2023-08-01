import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info-title">
        <h2>Overview of Common Coffee Diseases In Ethiopia</h2>
      </div>
      <div className="info-content">
        <p>
          Coffee diseases pose a significant threat to coffee farmers in
          Ethiopia, affecting the health and productivity of coffee crops.
          Understanding the nature of these diseases and their implications is
          crucial for the successful implementation of the BunaCare project,
          which aims to mitigate their adverse effects. Some of the common
          coffee diseases and their impact on yields include
        </p>
      </div>
      <div className="rust">
        <header className="rust-title">
          <h3> Coffee Leaf Rust (Hemileia vastatrix):</h3>
        </header>
        <p className="rust-info">
          Coffee Leaf Rust (CLR) is one of the most devastating diseases
          affecting coffee plants worldwide, and Ethiopia is no exception. This
          disease causes yellow-orange rust-like lesions on the leaves, leading
          to premature leaf drop and reduced photosynthetic capacity. Severe
          infestations can result in stunted growth, defoliation, and
          considerable yield losses. Coffee leaf rust can spread rapidly,
          especially in areas with favorable environmental conditions, posing a
          significant threat to coffee production. CLR is a highly contagious
          disease that spreads rapidly through coffee plantations. It causes
          severe defoliation, reducing the photosynthetic capacity of the plant.
          As infected leaves prematurely drop, the coffee tree's ability to
          produce and ripen cherries is compromised, leading to significant
          yield losses. In severe cases, coffee leaf rust can result in yield
          reductions of up to 50% or more, severely affecting the income and
          livelihoods of coffee farmers.
        </p>
      </div>
      <div className="cofbro">
        <header className="cofbro-title">
          <h3> Coffee Brown Eye Spot (Cercospora coffeicola):</h3>
        </header>
        <p className="cofbto-info">
          Coffee Brown Eye Spot is characterized by small brown circular spots
          with light centers on coffee leaves. Although BES may not cause
          extensive defoliation like other diseases, repeated infections can
          lead to reduced photosynthesis and stress on coffee plants. Effective
          disease management strategies are necessary to prevent significant
          economic losses. Infected leaves may fall prematurely, contributing to
          yield losses. Over time, these reductions in yield can accumulate,
          affecting the overall productivity of coffee farms.
        </p>
      </div>
      <div className="treatment">
        <header className="treatment">
          <h3>treatment methods</h3>
          <ul className="list-disease">
            <ul className="mild">
              <li>
                mild infections
                <ul>
                  <li>Pruning affected leaves and branches.</li>
                  <li>Applying fungicides to control CLR spread.</li>
                </ul>
              </li>
            </ul>
            <ul className="moderate">
              <li>
                moderate infections
                <ul>
                  <li>
                    Pruning and removing heavily infected leaves and branches.
                  </li>
                  <li>Using targeted fungicides to manage the disease</li>
                  <li>
                    Implementing proper plant spacing and canopy management.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="severe">
              <li>
                severe infections
                <ul>
                  <li>Pruning extensively to remove infected parts.</li>
                  <li>Applying systemic and protective fungicides.</li>
                  <li>Ensuring optimal plant nutrition and health</li>
                </ul>
              </li>
            </ul>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Info;
