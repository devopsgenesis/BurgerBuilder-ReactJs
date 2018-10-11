import axios from 'axios';
const instance =axios.create({
    baseURL:'https://react-burger-builder-ashu.firebaseio.com/'
})
export default instance;