import React from "react";
import "./form.css";

// var stations = ["12th St. Oakland City Center", "16th St Mission", "19th St. Oakland", "24th St. Mission", "Ashby (Berkeley)", "Balboa Park"];


export const TrainLines = props =>


<select {...props}>
  <option disabled>Train Origin - End of Line</option>
  <option>Pittsburg/Bay Point - SFIA/Millbrae</option>
  <option>Millbrae SFIA - Pittsburg/Bay Point</option>
  <option>Warm Springs/South Fremont - Richmond</option>
  <option>Richmond - Warm Springs/South Fremont</option>
  <option>Warm Springs/South Fremont - Daly City</option>
  <option>Daly City - Warm Springs/South Fremont</option>
  <option>Millbrae/Daly City - Richmond</option>
  <option>Richmond - Daly City/Millbrae</option>
  <option>Dublin/Pleasanton - Daly City</option>
  <option>Daly City - Dublin/Pleasanton</option>
  <option>Coliseum - Oakland Airport</option>
  <option>Oakland Airport - Coliseum</option>

</select>;

export default TrainLines;
