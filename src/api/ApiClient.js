import axios from 'axios';

const ApiClient = class {
    post(endpoint, data) {
        return axios.post(endpoint, data);
    }
}

export default ApiClient;