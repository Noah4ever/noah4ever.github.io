interface PersistenceController {
  /**
   * Saves a value in the persistence layer.
   * @param key The key to save the value under.
   * @param value The value to save.
   * @returns void
   * @example
   * const controller = new LocalStorageController();
   * controller.save("testKey", "testValue");
   *  */
  save(key: string, value: string): void;
  /**
   * Loads a value from the persistence layer.
   * @param key The key to load the value from.
   * @returns The value saved under the key, or null if the key does not exist.
   * @example
   * const controller = new LocalStorageController();
   * controller.load("testKey");
   * */
  load(key: string): string | null;
  /**
   * Deletes a value from the persistence layer.
   * @param key The key to delete the value from.
   * @returns void
   * @example
   * const controller = new LocalStorageController();
   * controller.delete("testKey");
   * */
  delete(key: string): void;
}

/**
 * This class is used to save and load data from the browser's local storage.
 * It implements the PersistenceController interface.
 * @see PersistenceController
 */
export class LocalStorageController implements PersistenceController {
  save(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  load(key: string): string | null {
    return localStorage.getItem(key);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }
}

/**
 * This class is used to save and load data from the browser's cookies.
 * It implements the PersistenceController interface.
 * @see PersistenceController
 */
export class CookiesController implements PersistenceController {
  save(key: string, value: string): void {
    document.cookie = `${key}=${value}`;
  }

  load(key: string): string | null {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.split("=");
      if (cookieKey.trim() === key) {
        return cookieValue;
      }
    }
    return null;
  }

  delete(key: string): void {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
