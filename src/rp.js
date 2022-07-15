import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import RPjsLogo from "./assets/logo.svg";
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
<a id="cat-card" href="" target="_blank" class="block overflow-hidden rounded-2xl m-6">
  <div id="card-photo"></div>
  
  <div class="p-4 bg-gray-900">
    <h5 id="card-id" class="text-sm text-white"></h5>

    <p id="card-url" class="mt-1 text-xs text-gray-500"></p>
  </div>
</a>

`;

const ChangeButton = `
<a id="change-button" class="m-3 inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring">
  Mudar foto
</a>
`;

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col items-center justify-center">
    ${header} 

    <div class="flex justify-center items-center"> 
      ${CatCard}

      ${ChangeButton}
    </div>
    
    <div id="load-images" class="hidden"></div>
  </div>
`;

setCat(document.getElementById("card-photo"));

document.getElementById("change-button").addEventListener("click", () => {
  setCat(document.getElementById("card-photo"));
});
