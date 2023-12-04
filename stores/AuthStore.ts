import api from '~/plugins/api.ts';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const getCookieValue = (name: string) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

const subscriptions = [{"id": 1, "name": "free", "price": 0.0, "nb_message": 30, "nb_qa": 5, "nb_url": 1, "nb_doc": 1, "max_doc_size": 1, "has_pdf": true, "has_csv": false, "memory": 0, "refresh_frequency": "monthly", "link": " "}, {"id": 2, "name": "lite", "price": 29.99, "nb_message": 500, "nb_qa": 20, "nb_url": 3, "nb_doc": 3, "max_doc_size": 3, "has_pdf": true, "has_csv": false, "memory": 0, "refresh_frequency": "weekly", "link": "https://buy.stripe.com/test_14k8zP7Ked3A2S4aEH"}, {"id": 3, "name": "pro", "price": 99.99, "nb_message": 3000, "nb_qa": 50, "nb_url": 10, "nb_doc": 10, "max_doc_size": 5, "has_pdf": true, "has_csv": false, "memory": 0, "refresh_frequency": "daily", "link": "https://buy.stripe.com/test_bIYbM12pU7JgcsEcMQ"}]


export const useAuthStore = defineStore('auth', {
    state: () => {
        // initialize state from local storage to enable user to stay logged in
        return ({
            user: {},
            subscription: {},
            subscriptions: [],
            usage: [],
            returnUrl: null
        })
    },
    actions: {
        async login(email: string, password: string) {
            api().api.post(`users/login`, { email, password }, {}, false).then((response: response) => {
                this.user = response.item;
                navigateTo('/app/dashboard')
            })
        },
        async register(email: string, password: string) {
            api().api.post(`users/register`, { email, password }, {}, false).then((response: response) => {
                this.user = response.item;
                navigateTo('/app/tutorial')
            });

        },
        unsubscribe() {
            api().api.post(`users/unsubscribe`, {}).then(() => {this.getSubscription(); this.getSubscriptions(); this.getUsage(); this.logout()})
        },
        getSubscription() {
            api().api.get(`users/subscription`).then((response: response) => {
                this.subscription = response.item;
            }).catch(() => {
                this.subscription = {name: 'Unknown'}
            })
        },
        getSubscriptions() {
            this.subscriptions = subscriptions
            // api().api.get(`users/subscriptions`).then((response: response) => {
            //     this.subscriptions = response.items;
            // })
        },
        getUsage() {
            api().api.get(`users/usage`).then((response: response) => {
                this.usage = response.items;
            })
        },
        logout() {
            this.user = {};
            document.cookie = `user=`
            navigateTo('/app/login')
        },
        redirectIfNotConnected() {
            const isUserInStore = Object.keys(this.user).length !== 0
            const userInCookies = getCookieValue('user')
            // If the store has the value but it's not in the cookies, we add it to the cookies
            if (isUserInStore && !userInCookies) {
                document.cookie = `user=${JSON.stringify(this.user)}`
            } else {
                // If the store does not have the value but it's in the cookies, we read it from the cookies
                if (!isUserInStore && userInCookies) {
                    this.user = JSON.parse(userInCookies)
                    const route = useRoute()
                    const redirectPath = route.path.substring(1)
                    const redirectParam = redirectPath.includes('documentation') ? 'app/dashboard' : redirectPath;
                    navigateTo('/app/empty?redirect=' + redirectParam)
                } else {
                    // If neither the store nor the cookies have the value, we redirect to login page
                    if (!isUserInStore && !userInCookies)
                        navigateTo('/app/login')
                }
            }
        }
    },
    persist: true
});


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}