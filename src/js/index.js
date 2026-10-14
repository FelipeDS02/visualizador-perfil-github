import { getGithubUser } from "./githubApi.js";
import {
  clearProfile,
  renderLoading,
  renderProfile,
} from "./profileView.js";

const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");
const profileResults = document.querySelector(".profile-results");

async function handleSearch() {
  const userName = inputSearch.value.trim();

  if (!userName) {
    return;
  }

  renderLoading(profileResults);

  try {
    const userData = await getGithubUser(userName);
    renderProfile(profileResults, userData);
  } catch (error) {
    clearProfile(profileResults);
    console.error("Erro ao buscar perfil do usuário:", error);
    alert(error.message || "Ocorreu um erro ao buscar o perfil do usuário.");
  }
}

btnSearch.addEventListener("click", handleSearch);

inputSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

