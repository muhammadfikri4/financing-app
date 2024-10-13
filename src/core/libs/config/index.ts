export const config = {
    api: {
        url: import.meta.env.VITE_API_URL
    }
}

export const endpoint = {
    auth: {
        signin: `${config.api.url}/auth/sign-in`,
        signup: `${config.api.url}/auth/sign-up`
    }
}