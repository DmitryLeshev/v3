const DB_NAME = "indexedDB";
const DB_VERSION = 2;
const DB_STORE_NAME_1 = "my_story_1";
const DB_STORE_NAME_2 = "my_story_2";

let database: any;
let transaction: any;

const request = indexedDB.open(DB_NAME, DB_VERSION);
console.log("IDBDatabase", request);

request.onupgradeneeded = function () {
  let db = request.result;

  if (!db.objectStoreNames.contains(DB_STORE_NAME_1)) {
    db.createObjectStore(DB_STORE_NAME_1, { keyPath: "key" });
  }

  if (!db.objectStoreNames.contains(DB_STORE_NAME_2)) {
    db.createObjectStore(DB_STORE_NAME_2, { autoIncrement: true });
  }

  switch (db.version) {
    case 0: {
      console.log("DB version 0");
      break;
    }
    case 1: {
      console.log("DB version 1");
      break;
    }
  }
};

request.onerror = function () {
  console.error("Error", request.error);
};

request.onsuccess = function () {
  let db = request.result;
  // продолжить работу с базой данных, используя объект db
  db.onversionchange = function () {
    db.close();
    alert("База данных устарела, пожалуста, перезагрузите страницу.");
  };

  database = db;
  transaction = db.transaction(DB_STORE_NAME_1, "readwrite");
  // const my_story_2 = db.transaction(DB_STORE_NAME_2, "readwrite");
};

async function getItem(name: string) {
  console.log("[indexDB/getItem]", { name, transaction });
  //   return new Promise((resolve, rejects) => {
  //     const transaction = db.transaction([DB_STORE_NAME], "readwrite");
  //     const store = transaction.objectStore(DB_STORE_NAME);
  //     const req = store.get(name);

  //     console.log({ db, transaction, store, req });
  //     req.onsuccess = function () {
  //       console.log(req.result);
  //       resolve(req.result);
  //     };
  //     req.onerror = function () {
  //       console.log("Ошибка", req.error);
  //       rejects(req.error);
  //     };
  //   });
}

async function setItem(name: string, value: any) {
  console.log("[indexDB/setItem]", { name, value });
  //   return new Promise((resolve, rejects) => {
  //     const transaction = db.transaction([DB_STORE_NAME], "readwrite");
  //     const store = transaction.objectStore(DB_STORE_NAME);
  //     const req = store.put({ [name]: value });
  //     req.onsuccess = function () {
  //       console.log(req.result);
  //       resolve(req.result);
  //     };
  //     req.onerror = function () {
  //       console.log("Ошибка", req.error);
  //       rejects(req.error);
  //     };
  //   });
}

export const storage = {
  getItem,
  setItem,
};

// async function initDB() {
//   const request = indexedDB.open(DB_NAME, DB_VERSION);
//   request.onupgradeneeded = (event: any) => {
//     let db = request.result;

//     if (!db.objectStoreNames.contains(DB_STORE_NAME)) {
//       db.createObjectStore(DB_STORE_NAME, { autoIncrement: true });
//     }
//   };

//   request.onerror = (event: any) => {
//     deleteDB(DB_NAME);
//     location.reload();
//   };

//   request.onsuccess = (event: any) => {
//     db = event.target.result;
//     db.onversionchange = function () {
//       db.close();
//       console.warn("База данных устарела, пожалуста, перезагрузите страницу.");
//     };
//   };
// }

async function deleteDB(name: string) {
  const request = indexedDB.deleteDatabase(name);
  request.onerror = (event: any) => {
    console.log("[indexDB/deleteDB] onerror", event);
  };
  request.onsuccess = (event: any) => {
    console.log("[indexDB/deleteDB] onsuccess", event);
  };
}
