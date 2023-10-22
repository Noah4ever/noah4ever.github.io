interface PersistenceController {
  save(key: string, value: string): void;
  load(key: string): string | null;
}

export class LocalStorageController implements PersistenceController {
  save(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  load(key: string): string | null {
    return localStorage.getItem(key);
  }
}

export class CookiesController implements PersistenceController {
  save(key: string, value: string): void {
    document.cookie = `${key}=${value}`;
  }

  load(key: string): string | null {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const [cookieKey, cookieValue] = cookies[i].split("=");
      if (cookieKey.trim() === key) {
        return cookieValue;
      }
    }
    return null;
  }
}
