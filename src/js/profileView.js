function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;

  if (text) {
    element.textContent = text;
  }

  return element;
}

export function renderLoading(container) {
  const loading = createElement("p", "loading", "Carregando...");
  loading.setAttribute("role", "status");
  container.replaceChildren(loading);
}

export function renderProfile(container, userData) {
  const profileCard = createElement("div", "profile-card");
  const avatar = createElement("img", "profile-avatar");
  const profileInfo = createElement("div", "profile-info");
  const displayName = userData.name || userData.login;

  avatar.src = userData.avatar_url;
  avatar.alt = `Avatar de ${displayName}`;

  profileInfo.append(
    createElement("h2", "", displayName),
    createElement("p", "", userData.bio || "Sem biografia disponível."),
  );
  profileCard.append(avatar, profileInfo);

  const counters = createElement("div", "profile-counters");
  const followers = createElement("div", "followers");
  const following = createElement("div", "following");

  followers.append(
    createElement("h4", "", "Seguidores"),
    createElement("span", "", String(userData.followers)),
  );
  following.append(
    createElement("h4", "", "Seguindo"),
    createElement("span", "", String(userData.following)),
  );
  counters.append(followers, following);

  container.replaceChildren(profileCard, counters);
}

export function clearProfile(container) {
  container.replaceChildren();
}