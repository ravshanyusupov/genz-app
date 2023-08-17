import api from "../axios.js";
export const getPosts = async () => {
    await api.get('recent_posts')
        .then(res => (res.data.data))
        .catch(err => console.log(err))
}