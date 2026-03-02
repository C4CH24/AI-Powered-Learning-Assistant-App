import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const getDashboardData = async (quizId) => {
   try {
      const response = await axiosiosinstance.get(API_PATHS.PROGRESS.GET_DASHBOARD);
      return response.data;
   } catch (error) {
       throw error.response?.data || { message: 'Failed to fetch dashboard data' };
   }  
};

const progressService = {
    getDashboardData,
};

export default progressService;

