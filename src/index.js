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

// e.g. import css
import "./css/style.css";

// e.g. import font css
import "./fonts/da-font.css";

// e.g. import sass
import "./css/index.scss";

// e.g. import js
import {CrossDomainURL} from "./js/api.js";

// ===== axios interceptor config
// If it is a development environment, use proxy mode, otherwise use the absolute path of the website
// If dist is placed on the site requested by ajax, it is recommended to replace the CrossDomainURL with a relative path(e.g. "/").
const CORSUrl = process.env.NODE_ENV === "development" ? '/api/' : CrossDomainURL;
// create an axios instance
const service = axios.create({
  baseURL: CORSUrl, // api 的 base_url
  timeout: 30000 // request timeout
});
// ===== end axios interceptor config





// e.g. normal javscript
document.body.appendChild(addNewHi());
let HW = document.querySelector(".hello-world");
HW.innerHTML = lll + HW.innerHTML;

// e.g. proxy ajax
service.get("/file/ajax.php").then(res => {
  console.log(res);
  if (res.status === 200) {
    window.setTimeout(()=>{
      let ajaxContent = document.createElement("p");
      ajaxContent.textContent = res.data;
      document.querySelector(".hello-world").appendChild(ajaxContent);
    },3000);
  }
}).catch(err => {
  console.log(err);
});
