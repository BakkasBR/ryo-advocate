import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const  useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    const user = ref({})

    // const isAuthenticated = computed(() => authenticated.value)
    // const currentUser = computed(() => user.value)

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')

        try {
            await axios.post('/login', credentials)
            await attempt()
        } catch (error) {
            return Promise.reject(error.response.data.errors)
        }
    }

    const attempt = async () => {
        try {
            const response = await axios.get('/api/user')
            isAuthenticated.value = true
            user.value = response.data
            return response
        } catch (error) {
            isAuthenticated.value = false
            user.value = {}
        }
    }

    // Expose the state, getters, and actions
    return {
        //authenticated,
        user,
        isAuthenticated,
        // currentUser,
        login,
        attempt
    }
})
