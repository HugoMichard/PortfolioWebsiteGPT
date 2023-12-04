const displayResponseAlert = (response: response) => {
    if (response.alert) {
        ElMessage({
            message: response.alert.message,
            type: response.alert.type
        })
    }
}

const displayErrorAlert = (e: any) => {
    if (e.data && e.data.alert) {
        ElMessage.error({
            message: e.data.alert.message
        })
    }
}

const getDefaultHeaders = (authStore: any) => {
    const user = authStore.user
    return user && user.token ? { Authorization: user.token } : {}
}

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiUrl
    const authStore = useAuthStore()

    const api = {
        post: (url: string, body: any, headers: any, combineHeaders: boolean) => $fetch(`${apiUrl}/${url}`, {
            method: 'post',
            headers: combineHeaders ? { ...getDefaultHeaders(authStore), ...headers } : headers || getDefaultHeaders(authStore),
            body: body || {}
        }).then(response => {
            displayResponseAlert(response)
            return response
        }).catch(e => {
            displayErrorAlert(e)
            throw e
        }),
        get: (url: string, params: any, headers: any) => $fetch(`${apiUrl}/${url}`, {
            method: 'get',
            headers: headers || getDefaultHeaders(authStore),
            params: params || {}
        }).then(response => {
            displayResponseAlert(response)
            return response
        }).catch(e => {
            displayErrorAlert(e)
            throw e
        })
    }

    return {
        api: api,
        provide: {
            api: api
        }
    }
})
