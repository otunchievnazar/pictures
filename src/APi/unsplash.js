import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YjzG7uB1ZI7HynQ4-1v3h4jaRyGoykaFK22W_yT5JUo'
    }
});
