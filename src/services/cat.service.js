const baseUrl = `https://api.thecatapi.com/v1`;
const headers = new Headers();
headers.append("X-API-KEY", import.meta.env.API_KEY);
headers.append("Content-Type", "application/json");

/**
 * Função que realiza a requisição http para a API
 */
export async function getCat() {
  try {
    const response = await fetch(`${baseUrl}/images/search`);

    if (response.status !== 200) {
      return { success: false, status: response.status };
    }

    const json = await response.json();

    return { success: true, data: json[0] };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function setVote(vote) {
  try {
    const body = `{
      "image_id": "${vote.id}",
      "value": "${vote.value}"
    }`;

    const response = await fetch(`${baseUrl}/votes`, {
      method: "POST",
      headers,
      body: body,
    });

    const json = await response.json();

    return { success: true, data: json };
  } catch (error) {
    return { success: false, error: error };
  }
}
