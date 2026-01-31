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

// Tick every second
clock.granularity = "seconds";

// Get a handle on GUI label elements
let hourHand = document.getElementById("hourHand");
let minuteHand = document.getElementById("minuteHand");
let secondHand = document.getElementById("secondHand");

// get a handle on tickmarks
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
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);

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