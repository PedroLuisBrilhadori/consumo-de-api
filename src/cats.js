const url = `https://api.thecatapi.com/v1/images/search`;

/**
 * Função que realiza a requisição http para a API
 */
export async function getCat() {
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      return { success: false, status: response.status };
    }

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
  const style = "object-cover w-full max-h-80";

  const image = {
    element: imageElement,
    src: '<img src="x" alt="x">',
  };

  const response = await getCat();

  if (response.success) {
    const data = response.data;
    image.src = `<img id="cat-photo" loading="lazy" src="${data.url}" class="${style}" alt="imagem do gatinho :3">`;

    setCard(data.id, data.url, image);
    return;
  }

  const httpCatUrl = `https://http.cat/${response?.status}`;
  image.src = `<img id="cat-photo" loading="lazy" src="${httpCatUrl}" class="${style}" alt="imagem do gatinho :3">`;

  setCard("Nâo foi possível achar seu gatinho :(", httpCatUrl, image);
}

/**
 * Seta as informações do card
 * @param id nome da foto
 */
function setCard(id, url, image) {
  // elementos que serão usados para adicionar os dados no cat-card
  const cardElement = document.getElementById("cat-card");
  const cardUrlElement = document.getElementById("card-url");
  const cardIdElement = document.getElementById("card-id");

  image.element.innerHTML = image.src;
  cardIdElement.innerText = id;
  cardUrlElement.innerText = url;
  cardElement.href = url;
}
