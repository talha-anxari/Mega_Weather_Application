/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright talhaanxari 2024 All rights reserved
 * @author talhaanxari <talhaanxaritn@outlook.com>
 */

"use strict";

export const weekDayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 *
 * @param {number} dataUnix Unix date in second
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: 'Monday 01 July'
 */

export const getDate = function (dataUnix, timezone) {
  const date = new Date((dataUnix + timezone) * 1000);
  const weekDayNames = weekDayName[date.getUTCDay()];
  const monthNames = monthName[date.getUTCMonth()];

  return `${weekDayNames}, ${date.getUTCDate()}, ${monthNames}`;
};

/**
 * @param {number} timeUnix Unix date in second
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: 'HH:MM AM/PM'
 */

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}: ${minutes} ${period}`;
};

/**
 * @param {number} timeUnix Unix date in second
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: 'HH AM/PM'
 */

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

/**
 * @param {number} mps Meter per seconds
 * @returns {number} kilometer per hours
 */

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air Quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
  },
  4: {
    level: "Poor",
    message:
      "Sensitivity to particulate matter may be a concern for the general public. This would be a good time for people with respiratory problems to limit outdoor exertion.",
  },
  5: {
    level: "Very Poor",
    message:
      "Health Warning of emergency conditions. The Entire population is more likely to be affected",
  }
};
