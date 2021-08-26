export const paths = {
  login: () => "/login",
  activation: () => "/activation",
  home: () => "/home",
  tasks: () => "/tasks",
  incidents: () => "/incidents",
  devices: () => "/devices",
  settings: () => "/settings",
  systems: () => "/systems",
  users: () => "/users",
  cardEdit: (cardId = ":cardId") => `/card/${cardId}/edit`,
  cardCreate: () => `/card/new`,
  oauthDone: () => "/accesso/done",
  user: (username = ":username") => `/u/${username}`,
  search: (query = "") => {
    if (query) return `/search?query=${query}`;
    return "/search";
  },
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};
