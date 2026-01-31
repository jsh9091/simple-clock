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
let zeroMinTick = document.getElementById("zeroMinTick");
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
  zeroMinTick.groupTransform.rotate.angle = 0;
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
}