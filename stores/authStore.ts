import {defineStore} from 'pinia'
import {ref} from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref('')

  async function login(username: string, password: string): Promise<void> {
      try {
        const response = await axios.post('api/login', {
            username,
            password
        })
        user.value = response.data.user
        token.value = response.data.token

        axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
      } catch(err) {
          console.log('Login failed: ', err)
      }
  }

  function logout(): void {
      user.value = null
      token.value = ''

      delete axios.defaults.headers.common['Authorization']
  }

  return {
      user,
      token,
      login,
      logout
  }
})
