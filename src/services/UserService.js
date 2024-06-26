import axios from './customize-axios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
    return axios.post("/api/users", { name, job });
};

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
};

const editUser = (id, user) => {
    return axios.put(`/api/users/${id}`, user);
};

const loginApp = (email, password) => {
   return axios.post("/api/login", (email, password));
}

export {loginApp, fetchAllUser, postCreateUser, deleteUser, editUser };
