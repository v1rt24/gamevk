export class LocalStorageUtil {
    static get(key: string) {
        return JSON.parse(localStorage.getItem(key) || 'null');
    }

    static set(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static remove(key: string) {
        localStorage.removeItem(key);
    }
}