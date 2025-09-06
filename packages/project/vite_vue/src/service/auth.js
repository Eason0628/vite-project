import http from '@/js/http'

export function login(data) {
    return http.post('/login', data)
}