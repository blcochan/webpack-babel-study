import { math } from "./math.js";
import "./app.css";
import favicon from "./images/favicon.png";
import codit from "./images/share_codit_search_en.png";

console.log(math.sum(1, 2));

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
        <img src="${favicon}" /><br />
        <img src="${codit}" />
    `;
});
