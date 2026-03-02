import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const login = async (email, password) => {
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
        return response.data; // Expecting { user, token }
    } catch (error) {
        throw error.response?.data || {message: 'An unknown error occured during login.'};
    }
};

const register = async (username , email , password) => {
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, { username , email, password });
        return response.data; // Expecting { user, token }
    } catch (error) {
        throw error.response?.data || {message: 'An unknown error occured during registration.'};
    }
};

const getProfile = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
        return response.data; // Expecting user profile data
    } catch (error) {
        throw error.response?.data || {message: 'An unknown error occured while fetching profile.'};
    }   
};

const updateProfile = async (userData) => {
    try {
        const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, profileData);
        return response.data; // Expecting updated user profile data
    } catch (error) {
        throw error.response?.data || {message: 'An unknown error occured while updating profile.'};
    }   
};

const changePassword = async (currentPassword, newPassword) => {
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.CHANGE_PASSWORD, { currentPassword, newPassword });
        return response.data; // Expecting success message
    } catch (error) {
        throw error.response?.data || {message: 'An unknown error occured while changing password.'};
    }
};

const authService = {
    login,
    register,
    getProfile,
    updateProfile,
    changePassword,
};

export default authService;



