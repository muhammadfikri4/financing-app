import Cookies from 'js-cookie'

export const cookie = {
    get: <T>(key: string) => {
        const value = Cookies.get(btoa(key))
        if (value) {
            return JSON.parse(atob(value)) as T
        }
        return undefined
    },
    save: <T>(key: string, value: T) => {
        Cookies.set(btoa(key), btoa(JSON.stringify(value)))
    },
    remove: (key: string) => {
        Cookies.remove(btoa(key))
    }
}