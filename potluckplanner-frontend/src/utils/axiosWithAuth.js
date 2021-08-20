import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: '',
        headers: {
        authorization: `Bearer ${token}`,
        },
    });
};
export default axiosWithAuth;