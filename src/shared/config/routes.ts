export type NavigationRoute = {
  id: number;
  url: (params?: string) => string;
  title: string;
};

export const SITE_NAVIGATION: NavigationRoute[] = [
  {
    id: 1,
    url: (params = "") => `/home${params && "/" + params}`,
    title: "home",
  },
  {
    id: 2,
    url: (params = "") => `/tasks${params && "/" + params}`,
    title: "tasks",
  },
  {
    id: 3,
    url: (params = "") => `/incidents${params && "/" + params}`,
    title: "incidents",
  },
  {
    id: 4,
    url: (params = "") => `/devices${params && "/" + params}`,
    title: "devices",
  },
  {
    id: 5,
    url: (params = "") => `/system${params && "/" + params}`,
    title: "system",
  },
];

export const SETTINGS_NAVIGATION: NavigationRoute[] = [
  {
    id: 6,
    url: (params = "") => `/profile${params && "/" + params}`,
    title: "profile",
  },
  {
    id: 7,
    url: (params = "") => `/settings${params && "/" + params}`,
    title: "settings",
  },
];
