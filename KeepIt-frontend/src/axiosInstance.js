import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axioInstance = axios.create({
    baseURL: baseURL, 
    headers: {
        "Content-Type": 'application/json'
    }
})

// Request Interceptor
axioInstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },function(error){
        return Promise.reject(error)
    }
)

// Response interseptor
axioInstance.interceptors.response.use(
    function(response){
        return response
    },
    // handle failed response
    async function(error){
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest.retry){
            originalRequest.reject = true
            const refreshToken = localStorage.getItem('refreshToken')
            try {
                const response = await axioInstance.post('/token/refresh/', {refresh: refreshToken})
                console.log('new access token ===> ', response.data.access)
                localStorage.setItem('accessToken', response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axioInstance(originalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                window.location.href = "/login"
            }
        }
        return Promise.reject(error)
    }
)

export default axioInstance