const BASE_URL = "https://api.github.com";

export async function getGithubUser(userName) {
  let response;

  try {
    response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);
  } catch {
    throw new Error("Ocorreu um erro ao buscar o perfil do usuário. Tente novamente.");
  }

  if (response.status === 404) {
    throw new Error(
      "Usuário não encontrado. Verifique o nome de usuário e tente novamente.",
    );
  }

  if (!response.ok) {
    throw new Error("Ocorreu um erro ao buscar o perfil do usuário. Tente novamente.");
  }

  try {
    return await response.json();
  } catch {
    throw new Error("Não foi possível ler os dados do perfil. Tente novamente.");
  }
}