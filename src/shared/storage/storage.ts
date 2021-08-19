interface CustomStorage {
  getItem: <T>(name: string) => T;
  setItem: <T>(name: string, value: T) => void;
}

let storage: CustomStorage;

export async function setItem<T>(name: string, value: T) {
  if (typeof storage.setItem !== "function") {
    throw "Storage should implement setItem method";
  }
  storage.setItem<typeof value>(name, value);
}

export async function getItem<T>(name: string) {
  if (typeof storage.setItem !== "function") {
    throw "Storage should implement getItem method";
  }
  return storage.getItem<T>(name);
}

export const setStorage = (instanse: CustomStorage) => {
  storage = instanse;
};
