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
  // elementos que serão usados para adicionar os dados no cat-card
  const cardElement = document.getElementById("cat-card");
  const cardUrlElement = document.getElementById("card-url");
  const cardIdElement = document.getElementById("card-id");

  const response = await getCat();

  if (response.success) {
    const data = response?.data;
    let cat = `<img id="cat-photo" loading="lazy" src="${data.url}" class="object-cover w-full h-96" alt="imagem do gatinho :3">`;

    imageElement.innerHTML = cat;
    cardIdElement.innerText = data.id;
    cardUrlElement.innerText = data.url;
    cardElement.href = data.url;

    return;
  }

  const httpCatUrl = `https://http.cat/${response?.status}`;

  let cat = `<img id="cat-photo" loading="lazy" src="${httpCatUrl}" class="object-cover w-full h-96" alt="imagem do gatinho :3">`;

  imageElement.innerHTML = cat;
  cardIdElement.innerText = "Não foi possivel achar seu gatinho :(";
  cardUrlElement.innerText = httpCatUrl;
  cardElement.href = httpCatUrl;
}
