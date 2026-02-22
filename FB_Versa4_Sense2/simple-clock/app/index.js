/*
 * MIT License
 *
 * Copyright (c) 2025 Joshua Horvath
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clock from "clock";
import * as document from "document";
import * as simpleSettings from "./simple/device-settings";

let color = "white";
let showSeconds = true;
let showNumbers = false;
let showDate = false;

// Tick every second
clock.granularity = "seconds";

// Get a handle on GUI label elements
let hourHand = document.getElementById("hourHand");
let minuteHand = document.getElementById("minuteHand");
let secondHand = document.getElementById("secondHand");
let hourHandRect = document.getElementById("hourHandRect");
let minuteHandRect = document.getElementById("minuteHandRect");
let secondHandRect = document.getElementById("secondHandRect");
let secondHandCenter = document.getElementById("secondHandCenter");
let minuteTickCutOffCircle = document.getElementById("minuteTickCutOffCircle");
let hourTickCutOffCircle = document.getElementById("hourTickCutOffCircle");
let backgroundCircle = document.getElementById("backgroundCircle");
let datelabel = document.getElementById("datelabel");

// get a handle on tickmarks groups
let oneMinTick = document.getElementById("oneMinTick");
let twoMinTick = document.getElementById("twoMinTick");
let threeMinTick = document.getElementById("threeMinTick");
let fourMinTick = document.getElementById("fourMinTick");
let fiveMinTick = document.getElementById("fiveMinTick");
let sixMinTick = document.getElementById("sixMinTick");
let sevenMinTick = document.getElementById("sevenMinTick");
let eightMinTick = document.getElementById("eightMinTick");
let nineMinTick = document.getElementById("nineMinTick");
let tenMinTick = document.getElementById("tenMinTick");
let elevenMinTick = document.getElementById("elevenMinTick");
let twelveMinTick = document.getElementById("twelveMinTick");
let thirteenMinTick = document.getElementById("thirteenMinTick");
let fourteenMinTick = document.getElementById("fourteenMinTick");
let fifteenMinTick = document.getElementById("fifteenMinTick");
let sixteenMinTick = document.getElementById("sixteenMinTick");
let seventeenMinTick = document.getElementById("seventeenMinTick");
let eightteenMinTick = document.getElementById("eightteenMinTick");
let nineteenMinTick = document.getElementById("nineteenMinTick");
let twentyMinTick = document.getElementById("twentyMinTick");
let twentyoneMinTick = document.getElementById("twentyoneMinTick");
let twentytwoMinTick = document.getElementById("twentytwoMinTick");
let twentythreeMinTick = document.getElementById("twentythreeMinTick");
let twentyfourMinTick = document.getElementById("twentyfourMinTick");
let twentyfiveMinTick = document.getElementById("twentyfiveMinTick");
let twentysixMinTick = document.getElementById("twentysixMinTick");
let twentysevenMinTick = document.getElementById("twentysevenMinTick");
let twentyeightMinTick = document.getElementById("twentyeightMinTick");
let twentynineMinTick = document.getElementById("twentynineMinTick");
let thirtyMinTick = document.getElementById("thirtyMinTick");
let thirtyoneMinTick = document.getElementById("thirtyoneMinTick");
let thirtytwoMinTick = document.getElementById("thirtytwoMinTick");
let thirtythreeMinTick = document.getElementById("thirtythreeMinTick");
let thirtyfourMinTick = document.getElementById("thirtyfourMinTick");
let thirtyfiveMinTick = document.getElementById("thirtyfiveMinTick");
let thirtysixMinTick = document.getElementById("thirtysixMinTick");
let thirtysevenMinTick = document.getElementById("thirtysevenMinTick");
let thirtyeightMinTick = document.getElementById("thirtyeightMinTick");
let thirtynineMinTick = document.getElementById("thirtynineMinTick");
let fortyMinTick = document.getElementById("fortyMinTick");
let fortyoneMinTick = document.getElementById("fortyoneMinTick");
let fortytwoMinTick = document.getElementById("fortytwoMinTick");
let fortythreeMinTick = document.getElementById("fortythreeMinTick");
let fortyfourMinTick = document.getElementById("fortyfourMinTick");
let fortyfiveMinTick = document.getElementById("fortyfiveMinTick");
let fortysixMinTick = document.getElementById("fortysixMinTick");
let fortysevenMinTick = document.getElementById("fortysevenMinTick");
let fortyeightMinTick = document.getElementById("fortyeightMinTick");
let fortynineMinTick = document.getElementById("fortynineMinTick");
let fiftyMinTick = document.getElementById("fiftyMinTick");
let fiftyoneMinTick = document.getElementById("fiftyoneMinTick");
let fiftytwoMinTick = document.getElementById("fiftytwoMinTick");
let fiftythreeMinTick = document.getElementById("fiftythreeMinTick");
let fiftyfourMinTick = document.getElementById("fiftyfourMinTick");
let fiftyfiveMinTick = document.getElementById("fiftyfiveMinTick");
let fiftysixMinTick = document.getElementById("fiftysixMinTick");
let fiftysevenMinTick = document.getElementById("fiftysevenMinTick");
let fiftyeightMinTick = document.getElementById("fiftyeightMinTick");
let fiftynineMinTick = document.getElementById("fiftynineMinTick");
let sixtyMinTick = document.getElementById("sixtyMinTick");

// get actual hand rectangles 
let oneMinTickRect = document.getElementById("oneMinTickRect");
let twoMinTickRect = document.getElementById("twoMinTickRect");
let threeMinTickRect = document.getElementById("threeMinTickRect");
let fourMinTickRect = document.getElementById("fourMinTickRect");
let fiveMinTickRect = document.getElementById("fiveMinTickRect");
let sixMinTickRect = document.getElementById("sixMinTickRect");
let sevenMinTickRect = document.getElementById("sevenMinTickRect");
let eightMinTickRect = document.getElementById("eightMinTickRect");
let nineMinTickRect = document.getElementById("nineMinTickRect");
let tenMinTickRect = document.getElementById("tenMinTickRect");
let elevenMinTickRect = document.getElementById("elevenMinTickRect");
let twelveMinTickRect = document.getElementById("twelveMinTickRect");
let thirteenMinTickRect = document.getElementById("thirteenMinTickRect");
let fourteenMinTickRect = document.getElementById("fourteenMinTickRect");
let fifteenMinTickRect = document.getElementById("fifteenMinTickRect");
let sixteenMinTickRect = document.getElementById("sixteenMinTickRect");
let seventeenMinTickRect = document.getElementById("seventeenMinTickRect");
let eightteenMinTickRect = document.getElementById("eightteenMinTickRect");
let nineteenMinTickRect = document.getElementById("nineteenMinTickRect");
let twentyMinTickRect = document.getElementById("twentyMinTickRect");
let twentyoneMinTickRect = document.getElementById("twentyoneMinTickRect");
let twentytwoMinTickRect = document.getElementById("twentytwoMinTickRect");
let twentythreeMinTickRect = document.getElementById("twentythreeMinTickRect");
let twentyfourMinTickRect = document.getElementById("twentyfourMinTickRect");
let twentyfiveMinTickRect = document.getElementById("twentyfiveMinTickRect");
let twentysixMinTickRect = document.getElementById("twentysixMinTickRect");
let twentysevenMinTickRect = document.getElementById("twentysevenMinTickRect");
let twentyeightMinTickRect = document.getElementById("twentyeightMinTickRect");
let twentynineMinTickRect = document.getElementById("twentynineMinTickRect");
let thirtyMinTickRect = document.getElementById("thirtyMinTickRect");
let thirtyoneMinTickRect = document.getElementById("thirtyoneMinTickRect");
let thirtytwoMinTickRect = document.getElementById("thirtytwoMinTickRect");
let thirtythreeMinTickRect = document.getElementById("thirtythreeMinTickRect");
let thirtyfourMinTickRect = document.getElementById("thirtyfourMinTickRect");
let thirtyfiveMinTickRect = document.getElementById("thirtyfiveMinTickRect");
let thirtysixMinTickRect = document.getElementById("thirtysixMinTickRect");
let thirtysevenMinTickRect = document.getElementById("thirtysevenMinTickRect");
let thirtyeightMinTickRect = document.getElementById("thirtyeightMinTickRect");
let thirtynineMinTickRect = document.getElementById("thirtynineMinTickRect");
let fortyMinTickRect = document.getElementById("fortyMinTickRect");
let fortyoneMinTickRect = document.getElementById("fortyoneMinTickRect");
let fortytwoMinTickRect = document.getElementById("fortytwoMinTickRect");
let fortythreeMinTickRect = document.getElementById("fortythreeMinTickRect");
let fortyfourMinTickRect = document.getElementById("fortyfourMinTickRect");
let fortyfiveMinTickRect = document.getElementById("fortyfiveMinTickRect");
let fortysixMinTickRect = document.getElementById("fortysixMinTickRect");
let fortysevenMinTickRect = document.getElementById("fortysevenMinTickRect");
let fortyeightMinTickRect = document.getElementById("fortyeightMinTickRect");
let fortynineMinTickRect = document.getElementById("fortynineMinTickRect");
let fiftyMinTickRect = document.getElementById("fiftyMinTickRect");
let fiftyoneMinTickRect = document.getElementById("fiftyoneMinTickRect");
let fiftytwoMinTickRect = document.getElementById("fiftytwoMinTickRect");
let fiftythreeMinTickRect = document.getElementById("fiftythreeMinTickRect");
let fiftyfourMinTickRect = document.getElementById("fiftyfourMinTickRect");
let fiftyfiveMinTickRect = document.getElementById("fiftyfiveMinTickRect");
let fiftysixMinTickRect = document.getElementById("fiftysixMinTickRect");
let fiftysevenMinTickRect = document.getElementById("fiftysevenMinTickRect");
let fiftyeightMinTickRect = document.getElementById("fiftyeightMinTickRect");
let fiftynineMinTickRect = document.getElementById("fiftynineMinTickRect");
let sixtyMinTickRect = document.getElementById("sixtyMinTickRect");

let oneLabel = document.getElementById("oneLabel");
let twoLabel = document.getElementById("twoLabel");
let threeLabel = document.getElementById("threeLabel");
let fourLabel = document.getElementById("fourLabel");
let fiveLabel = document.getElementById("fiveLabel");
let sixLabel = document.getElementById("sixLabel");
let sevenLabel = document.getElementById("sevenLabel");
let eightLabel = document.getElementById("eightLabel");
let nineLabel = document.getElementById("nineLabel");
let tenLabel = document.getElementById("tenLabel");
let elevenLabel = document.getElementById("elevenLabel");
let twelveLabel = document.getElementById("twelveLabel");

setTickMarks();

/**
 * Rotates the clock hands to show the curent time.
 */
function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  minuteHand.groupTransform.rotate.angle = minutesToAngle(mins);
  secondHand.groupTransform.rotate.angle = secondsToAngle(secs);

  updateDateField(today)
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);

/**
 * Set the date field. 
 * @param {*} date 
 */
function updateDateField(date) {
  if (showDate) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let index = date.getDay();
    let dayOfMonth = date.getDate();

    datelabel.text = dayNames[index] + " " + dayOfMonth;
  } else {
    datelabel.text = "";
  }
}

/**
 * Returns an angle (0-360) for the current hour in the day.
 * Also adjust the hour hand for minutes past the hour.
 * @param {*} hours
 * @param {*} minutes
 * @returns
 */
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

/**
 * Returns an angle (0-360) for minutes
 * @param {*} minutes
 * @returns
 */
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

/**
 * Returns an angle (0-360) for seconds
 * @param {*} seconds
 * @returns
 */
function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

function setTickMarks() {
  oneMinTick.groupTransform.rotate.angle = 6;
  twoMinTick.groupTransform.rotate.angle = 12;
  threeMinTick.groupTransform.rotate.angle = 18;
  fourMinTick.groupTransform.rotate.angle = 24;
  fiveMinTick.groupTransform.rotate.angle = 30;
  sixMinTick.groupTransform.rotate.angle = 36;
  sevenMinTick.groupTransform.rotate.angle = 42;
  eightMinTick.groupTransform.rotate.angle = 48;
  nineMinTick.groupTransform.rotate.angle = 54;
  tenMinTick.groupTransform.rotate.angle = 60;
  elevenMinTick.groupTransform.rotate.angle = 66;
  twelveMinTick.groupTransform.rotate.angle = 72;
  thirteenMinTick.groupTransform.rotate.angle = 78;
  fourteenMinTick.groupTransform.rotate.angle = 84;
  fifteenMinTick.groupTransform.rotate.angle = 90;
  sixteenMinTick.groupTransform.rotate.angle = 96;
  seventeenMinTick.groupTransform.rotate.angle = 102;
  eightteenMinTick.groupTransform.rotate.angle = 108;
  nineteenMinTick.groupTransform.rotate.angle = 114;
  twentyMinTick.groupTransform.rotate.angle = 120;
  twentyoneMinTick.groupTransform.rotate.angle = 126;
  twentytwoMinTick.groupTransform.rotate.angle = 132;
  twentythreeMinTick.groupTransform.rotate.angle = 138;
  twentyfourMinTick.groupTransform.rotate.angle = 144;
  twentyfiveMinTick.groupTransform.rotate.angle = 150;
  twentysixMinTick.groupTransform.rotate.angle = 156;
  twentysevenMinTick.groupTransform.rotate.angle = 162;
  twentyeightMinTick.groupTransform.rotate.angle = 168;
  twentynineMinTick.groupTransform.rotate.angle = 174;
  thirtyMinTick.groupTransform.rotate.angle = 180;
  thirtyoneMinTick.groupTransform.rotate.angle = 186;
  thirtytwoMinTick.groupTransform.rotate.angle = 192;
  thirtythreeMinTick.groupTransform.rotate.angle = 198;
  thirtyfourMinTick.groupTransform.rotate.angle = 204;
  thirtyfiveMinTick.groupTransform.rotate.angle = 210;
  thirtysixMinTick.groupTransform.rotate.angle = 216;
  thirtysevenMinTick.groupTransform.rotate.angle = 222;
  thirtyeightMinTick.groupTransform.rotate.angle = 228;
  thirtynineMinTick.groupTransform.rotate.angle = 234;
  fortyMinTick.groupTransform.rotate.angle = 240;
  fortyoneMinTick.groupTransform.rotate.angle = 246;
  fortytwoMinTick.groupTransform.rotate.angle = 252;
  fortythreeMinTick.groupTransform.rotate.angle = 258;
  fortyfourMinTick.groupTransform.rotate.angle = 264;
  fortyfiveMinTick.groupTransform.rotate.angle = 270;
  fortysixMinTick.groupTransform.rotate.angle = 276;
  fortysevenMinTick.groupTransform.rotate.angle = 282;
  fortyeightMinTick.groupTransform.rotate.angle = 288;
  fortynineMinTick.groupTransform.rotate.angle = 294;
  fiftyMinTick.groupTransform.rotate.angle = 300;
  fiftyoneMinTick.groupTransform.rotate.angle = 306;
  fiftytwoMinTick.groupTransform.rotate.angle = 312;
  fiftythreeMinTick.groupTransform.rotate.angle = 318;
  fiftyfourMinTick.groupTransform.rotate.angle = 324;
  fiftyfiveMinTick.groupTransform.rotate.angle = 330;
  fiftysixMinTick.groupTransform.rotate.angle = 336;
  fiftysevenMinTick.groupTransform.rotate.angle = 342;
  fiftyeightMinTick.groupTransform.rotate.angle = 348;
  fiftynineMinTick.groupTransform.rotate.angle = 354;
  sixtyMinTick.groupTransform.rotate.angle = 0;
}

/**
 * Get and process settings changes.
 * @param {*} data 
 * @returns 
 */
function settingsCallback(data) {
  if (!data) {
    return;
  }

  if (data.color) {
    color = data.color;
    setColor();
  }

  if (data.showSeconds !== undefined && data.showSeconds !== null) {
    showSeconds = data.showSeconds;
    if (showSeconds) {
      clock.granularity = "seconds";
      secondHand.style.display = "inline";
    } else {
      clock.granularity = "minutes";
      secondHand.style.display = "none";
      secondHandCenter.style.fill = "black";
    }
    setColor();
  }

  if (data.showNumbers !== undefined && data.showNumbers !== null) {
    showNumbers = data.showNumbers;

    updateNumbers();
  }
  if (data.showDate !== undefined && data.showDate !== null) {
    showDate = data.showDate;

    updateDateField(new Date());
  }

  if (color === "black") {
    updateTickColor("white");
    hourHandRect.style.fill = "white";
    minuteHandRect.style.fill = "white";
    datelabel.style.fill = "white";
  } else {
    updateTickColor("black")
    hourHandRect.style.fill = "black";
    minuteHandRect.style.fill = "black";
    datelabel.style.fill = "black";
  }
}
simpleSettings.initialize(settingsCallback);

/**
 * Updates colors.
 */
function setColor() {
  hourTickCutOffCircle.style.fill = color;
  minuteTickCutOffCircle.style.fill = color;
  backgroundCircle.style.fill = color;

  if (showSeconds) {
    secondHandRect.style.fill = "red";
    secondHandCenter.style.fill = "red";
    if (color === "red") {
      secondHandRect.style.fill = "black";
      secondHandCenter.style.fill = "black";
    }
  } else {
    if (color === "black") {
      secondHandCenter.style.fill = "white";
    } else {
      secondHandCenter.style.fill = "black";
    }
  }
  updateNumbers();
}

function updateTickColor(color) {
  oneMinTickRect.style.fill = color;
  twoMinTickRect.style.fill = color;
  threeMinTickRect.style.fill = color;
  fourMinTickRect.style.fill = color;
  fiveMinTickRect.style.fill = color;
  sixMinTickRect.style.fill = color;
  sevenMinTickRect.style.fill = color;
  eightMinTickRect.style.fill = color;
  nineMinTickRect.style.fill = color;
  tenMinTickRect.style.fill = color;
  elevenMinTickRect.style.fill = color;
  twelveMinTickRect.style.fill = color;
  thirteenMinTickRect.style.fill = color;
  fourteenMinTickRect.style.fill = color;
  fifteenMinTickRect.style.fill = color;
  sixteenMinTickRect.style.fill = color;
  seventeenMinTickRect.style.fill = color;
  eightteenMinTickRect.style.fill = color;
  nineteenMinTickRect.style.fill = color;
  twentyMinTickRect.style.fill = color;
  twentyoneMinTickRect.style.fill = color;
  twentytwoMinTickRect.style.fill = color;
  twentythreeMinTickRect.style.fill = color;
  twentyfourMinTickRect.style.fill = color;
  twentyfiveMinTickRect.style.fill = color;
  twentysixMinTickRect.style.fill = color;
  twentysevenMinTickRect.style.fill = color;
  twentyeightMinTickRect.style.fill = color;
  twentynineMinTickRect.style.fill = color;
  thirtyMinTickRect.style.fill = color;
  thirtyoneMinTickRect.style.fill = color;
  thirtytwoMinTickRect.style.fill = color;
  thirtythreeMinTickRect.style.fill = color;
  thirtyfourMinTickRect.style.fill = color;
  thirtyfiveMinTickRect.style.fill = color;
  thirtysixMinTickRect.style.fill = color;
  thirtysevenMinTickRect.style.fill = color;
  thirtyeightMinTickRect.style.fill = color;
  thirtynineMinTickRect.style.fill = color;
  fortyMinTickRect.style.fill = color;
  fortyoneMinTickRect.style.fill = color;
  fortytwoMinTickRect.style.fill = color;
  fortythreeMinTickRect.style.fill = color;
  fortyfourMinTickRect.style.fill = color;
  fortyfiveMinTickRect.style.fill = color;
  fortysixMinTickRect.style.fill = color;
  fortysevenMinTickRect.style.fill = color;
  fortyeightMinTickRect.style.fill = color;
  fortynineMinTickRect.style.fill = color;
  fiftyMinTickRect.style.fill = color;
  fiftyoneMinTickRect.style.fill = color;
  fiftytwoMinTickRect.style.fill = color;
  fiftythreeMinTickRect.style.fill = color;
  fiftyfourMinTickRect.style.fill = color;
  fiftyfiveMinTickRect.style.fill = color;
  fiftysixMinTickRect.style.fill = color;
  fiftysevenMinTickRect.style.fill = color;
  fiftyeightMinTickRect.style.fill = color;
  fiftynineMinTickRect.style.fill = color;
  sixtyMinTickRect.style.fill = color;
}

/**
 * Performs display update operations for clock numbers.
 */
function updateNumbers() {

  if (showNumbers) {
    oneLabel.text = "1";
    twoLabel.text = "2";
    threeLabel.text = "3";
    fourLabel.text = "4";
    fiveLabel.text = "5";
    sixLabel.text = "6";
    sevenLabel.text = "7";
    eightLabel.text = "8";
    nineLabel.text = "9";
    tenLabel.text = "10";
    elevenLabel.text = "11";
    twelveLabel.text = "12";

    if (color === "black") {
      const colorForBlack = "white";
      oneLabel.style.fill = colorForBlack;
      twoLabel.style.fill = colorForBlack;
      threeLabel.style.fill = colorForBlack;
      fourLabel.style.fill = colorForBlack;
      fiveLabel.style.fill = colorForBlack;
      sixLabel.style.fill = colorForBlack;
      sevenLabel.style.fill = colorForBlack;
      eightLabel.style.fill = colorForBlack;
      nineLabel.style.fill = colorForBlack;
      tenLabel.style.fill = colorForBlack;
      elevenLabel.style.fill = colorForBlack;
      twelveLabel.style.fill = colorForBlack;
    } else {
      const colorForNotBlack = "black";
      oneLabel.style.fill = colorForNotBlack;
      twoLabel.style.fill = colorForNotBlack;
      threeLabel.style.fill = colorForNotBlack;
      fourLabel.style.fill = colorForNotBlack;
      fiveLabel.style.fill = colorForNotBlack;
      sixLabel.style.fill = colorForNotBlack;
      sevenLabel.style.fill = colorForNotBlack;
      eightLabel.style.fill = colorForNotBlack;
      nineLabel.style.fill = colorForNotBlack;
      tenLabel.style.fill = colorForNotBlack;
      elevenLabel.style.fill = colorForNotBlack;
      twelveLabel.style.fill = colorForNotBlack;
    }
  } else {
    oneLabel.text = "";
    twoLabel.text = "";
    threeLabel.text = "";
    fourLabel.text = "";
    fiveLabel.text = "";
    sixLabel.text = "";
    sevenLabel.text = "";
    eightLabel.text = "";
    nineLabel.text = "";
    tenLabel.text = "";
    elevenLabel.text = "";
    twelveLabel.text = "";
  }
}