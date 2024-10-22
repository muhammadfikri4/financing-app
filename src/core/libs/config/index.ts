export const config = {
    api: {
        url: import.meta.env.VITE_API_URL ?? ''
    },
    storage: import.meta.env.VITE_STORAGE ?? ''
}

export const endpoint = {
    auth: {
        signin: `${config.api.url}/auth/sign-in`,
        signup: `${config.api.url}/auth/sign-up`
    },
    departments: `${config.api.url}/departments`,
    users: `${config.api.url}/users`,
    profile: `${config.api.url}/profile`
}