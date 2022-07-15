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
