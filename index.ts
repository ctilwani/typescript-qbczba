import "./style.css";
import moment from "moment";

const now = moment();

const baseFee = 50.7;
const percentage = 10.5;

const result = ((baseFee * percentage) / 100).toFixed(2);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>

Result: ${result} 
<br />
<br />
Today: ${now.format()}
<br />
ISO Weekday: ${now.isoWeekday()} `;
