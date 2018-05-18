/*!*
 *
 * @authors crlang (https://www.darlang.com)
 * @date    2018-05-18 15:22:15
 * @version 1.0
 */


import axios from "axios";

console.log("index.js");

// import js
import { addNewHi,lll } from "./js/utils.js";

// import css
import "./css/style.css";

// import font css
import "./fonts/da-font.css";

// import sass
import "./css/index.scss";

// something code
!(() => {
  // normal javscript
  document.body.appendChild(addNewHi());
  let HW = document.getElementsByClassName("hello-world")[0]
  HW.innerHTML = lll + HW.innerHTML;

  // proxy ajax
  axios.get("/api/file/ajax.php").then(res => {
    console.log(res);
    if (res.status === 200) {
      window.setTimeout(()=>{
        let proxyAjaxContent = document.createElement("p");
        proxyAjaxContent.textContent = res.data;
        document.getElementsByClassName("hello-world")[0].appendChild(proxyAjaxContent);
      },3000);
    }
  }).catch(err => {
    console.log(err);
  });
})();