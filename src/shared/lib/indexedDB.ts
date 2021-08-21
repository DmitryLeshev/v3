import { rejects } from "assert/strict";
import { resolve } from "path/posix";

const DB_NAME = 'DB_NAME';
const DB_VERSION = 1;
const DB_STORE_NAME = 'DB_STORE_NAME';

export let db: IDBDatabase;

export async function init () {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event: any) => {
        console.log("[indexDB/init] onupgradeneeded", event)
        let db = request.result;
        
        if (!db.objectStoreNames.contains(DB_STORE_NAME)){
            db.createObjectStore(DB_STORE_NAME, { keyPath: 'id' });
        };
    
        if (!db.objectStoreNames.contains('chat')){
            db.createObjectStore('chat', { autoIncrement: true });
        };

        if (!db.objectStoreNames.contains('iam')){
            db.createObjectStore('iam');
        }; 
    }
    
    request.onerror = (event: any) => {
        console.log("[indexDB/init] onerror", event)
        deleteDB(DB_NAME)
        location.reload()
    }
    request.onsuccess = (event: any) => {
        console.log("[indexDB/init] onsuccess", event)
        db = event.target.result
        db.onversionchange = function() {
            db.close();
            console.warn("База данных устарела, пожалуста, перезагрузите страницу.")
        };

    }


}

export async function deleteDB (name: string) {
    const request = indexedDB.deleteDatabase(name)
    request.onerror = (event: any) => {
        console.log("[indexDB/deleteDB] onerror", event)
    }
    request.onsuccess = (event: any) => {
        console.log("[indexDB/deleteDB] onsuccess", event)
    }
}

export async function getItem (key: string) {
    return new Promise((resolve, rejects) => {
        const transaction = db.transaction([DB_STORE_NAME], "readwrite");
        const books = transaction.objectStore(DB_STORE_NAME);
        const req = books.get(key)
        req.onsuccess = function() {
            console.log("Лови книгу", req.result);
            resolve(req.result)
        };
        req.onerror = function() {
            console.log("Ошибка", req.error);
            rejects(req.error)
        };
    })
}

export async function setItem (key: string, value: any) {
    return new Promise((resolve, rejects) => {
        const transaction = db.transaction([DB_STORE_NAME], "readwrite");
        const books = transaction.objectStore(DB_STORE_NAME);
        const book = {id: 'js',price: 10,created: new Date(), [key]: value};
        const req = books.put(book);
        req.onsuccess = function() {
            console.log("Книга добавлена в хранилище", req.result);
            resolve(req.result)
        };
        req.onerror = function() {
            console.log("Ошибка", req.error);
            rejects(req.error)
        };

    })
}

