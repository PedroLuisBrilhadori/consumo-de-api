const url = `https://api.thecatapi.com/v1/images/search`;
import Cat404 from "./assets/404.jpg";

/**
 * Função que realiza a requisição http para a API
 */
export async function getCat() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    return { success: true, data: json[0] };
  } catch (error) {
    return { success: false, error: error };
  }
}

/**
 * @param element um elemento HTML (no caso do exemplo, uma div);
 */
export async function setCat(imageElement) {
  const cardElement = document.getElementById("cat-card");
  const cardUrlElement = document.getElementById("card-url");
  const cardIdElement = document.getElementById("card-id");

  // const response = await getCat();

  if (!response.success) {
    let cat = `<img id="cat-photo" loading="lazy" src="${Cat404}" class="object-cover w-full h-96" alt="imagem do gatinho :3">`;
    imageElement.innerHTML = cat;
    cardIdElement.innerText = "Não foi possivel achar seu gatinho :(";
    cardUrlElement.innerText = "https://http.cat/404";
    cardElement.href = "https://http.cat/404";
    return;
  }

  const data = response?.data;

  let cat = `<img id="cat-photo" loading="lazy" src="${data?.url}" class="object-cover w-full h-96" alt="imagem do gatinho :3">`;
  imageElement.innerHTML = cat;
  cardIdElement.innerText = data.id;
  cardUrlElement.innerText = data.url;
  cardElement.href = data.url;
}
