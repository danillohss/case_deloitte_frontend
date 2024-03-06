import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'https://api.themoviedb.org',
});

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTY0YWY3Y2NiMzE5YjExYWI2ZTlmMjU3ZTA4MDY0ZCIsInN1YiI6IjY1ZTdhMTUwNDJmMTlmMDE4NzhjNmQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j4hVxMsggwfhJlrzajHEbzuDTnHXF2XJYhunZ0BQZZw",
    },
};

export default { options, apiAxios };