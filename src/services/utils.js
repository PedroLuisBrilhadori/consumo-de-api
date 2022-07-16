/**
 * Cria um estado de carregamento para imagens
 * @param url da imagem que será carregada
 */
export function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", (e) => resolve(url));
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
  });
}
