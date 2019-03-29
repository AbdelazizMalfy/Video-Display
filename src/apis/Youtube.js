import axios from 'axios';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: 'AIzaSyCrszE7WgOy-Q4A62atC0yQrZcRFBTJP8I',
        maxResults: 5
    }
})