async function setItem(key: string, value: any) {
  let result: string;
  try {
    result = JSON.stringify(value) ?? "";
  } catch (error) {
    throw "[localStorage] stringify error";
  }
  return window.localStorage.setItem(key, result);
}

async function getItem(key: string) {
  const string = window.localStorage.getItem(key) ?? "";
  let result;
  try {
    result = await JSON.parse(string);
  } catch (error) {
    throw "[localStorage] can't stringify";
  }
  return result;
}

export const storage = {
  setItem,
  getItem,
};
