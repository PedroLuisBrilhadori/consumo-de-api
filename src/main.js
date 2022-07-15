import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import RPjsLogo from "./assets/logo.svg";

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

const content = `
  <div>

  </div>
`;

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col items-center justify-center">
    ${header} 
    ${content}
  </div>
`;
