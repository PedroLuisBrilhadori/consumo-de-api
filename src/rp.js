import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import RPjsLogo from "./assets/logo.svg";
import loadingGIF from "./assets/loading.gif";
import { setCat } from "./cats";

const header = `
  <nav class="flex justify-between items-center w-full">
    <a href="https://rpjs.com.br" target="_blank">
      <img src="${RPjsLogo}" class="logo" alt="RP.js logo" />
    </a>

    <h1>Consumo de APIs</h1>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
  </nav>
`;

const CatCard = `
<a id="cat-card" href="" target="_blank" class="block overflow-hidden rounded-2xl">
  <div id="card-photo"></div>
  
  <div class="p-4 bg-gray-900">
    <h5 id="card-id" class="text-sm text-white"></h5>

    <p id="card-url" class="mt-1 text-xs text-gray-500"></p>
  </div>
</a>

`;

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col items-center justify-center">
    ${header} 
    ${CatCard}
    <div id="load-images" class="hidden"></div>
  </div>
`;

setCat(document.getElementById("card-photo"));
