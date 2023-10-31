import { ref } from 'vue'

export function useApi() {
    const api_path = ref('https://muftardigital.pythonanywhere.com/')

    return { api_path }
}