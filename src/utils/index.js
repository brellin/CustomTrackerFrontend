import axios from 'axios'

export default {
    axiosToken: token => axios.create({
        headers: {
            authorization: token
        }
    })
}
