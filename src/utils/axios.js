import axios from "axios"

const apiInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

const apiRequest = {
    patients: {
        get: (id) => apiInstance.get(`/patients/${id}`),
        put: (id,payload) =>apiInstance.put(`/patients/${id}`,payload)
    }
}

export default apiRequest