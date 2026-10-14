const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");
const profileResults = document.querySelector(".profile-results");
const BASE_URL = "https://api.github.com";

// Evento de clique no botão de busca
btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value;
  console.log("Valor digitado:", userName);

  if (userName) {
    try {
      // Mostra o carregamento
      profileResults.innerHTML = "Carregando...";

      // Aqui você pode adicionar a lógica para buscar o perfil do usuário no GitHub usando a API
      const response = await fetch(`${BASE_URL}/users/${userName}`);
      if (!response.ok) {
        // Esconde o carregamento em caso de usuário não encontrado
        profileResults.innerHTML = "";
        alert(
          "Usuario não encontrado. Por favor, verifique o nome de usuário e tente novamente.",
        );
        return;
      }
      const userData = await response.json();
      console.log("Dados do perfil:", userData);

      /*console.log('Avatar do usuário:', userData.avatar_url);
        console.log('Nome do usuário:', userData.name);
        console.log('Biografia do usuário:', userData.bio);
        //console.log(data.public_repos);
        console.log(data.followers);
        console.log(data.following);*/

      // Esconde o carregamento inserindo os dados do perfil
      profileResults.innerHTML = `
      <div class ="profile-card"> 
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
        <div class="profile-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio || "Sem biografia disponível."}
        </div>
        </div>`;
    } catch (error) {
      // Esconde o carregamento em caso de erro na requisição
      profileResults.innerHTML = "";
      console.error("Erro ao buscar perfil do usuário:", error);
      alert(
        "Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.",
      );
    }
  }
});

// Evento para pegar o valor ao pressionar a tecla "Enter" no teclado
/*inputSearch.addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13 || e.key === 'Enter';

    if (isEnterKeyPressed) {
        console.log('Valor capturado com Enter:', userName);
    }
});
*/

