let storage: any = null;

export async function setItem(name: string, value: any) {
  console.log("[storage] setItem", storage);
  if (!storage) throw "Storage not found";
  if (typeof storage.setItem !== "function") {
    throw "Storage should implement setItem method";
  }
  storage.setItem(name, value);
}

export async function getItem(name: string) {
  console.log("[storage] getItem", storage);
  if (!storage) throw "Storage not found";
  if (typeof storage.getItem !== "function") {
    throw "Storage should implement getItem method";
  }
  return storage.getItem(name);
}

export const setStorage = (instanse: any) => {
  storage = instanse;
  console.log({ storage });
};

console.log({ storage });
