import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


const getQuizzesForDocument = async (documentId) => {
   try {
      const response = await axiosiosinstance.get(API_PATHS.QUIZZES.GET_QUIZ_BY_ID(documentId));
      return response.data;
   } catch (error) {
       throw error.response?.data || { message: 'Failed to fetch quizzes' };
   }  
};

const getQuizById = async (quizId, answers) => {
   try {
      const response = await axiosiosinstance.get(API_PATHS.QUIZZES.GET_QUIZ_BY_ID(quizId));
      return response.data;
   } catch (error) {
       throw error.response?.data || { message: 'Failed to fetch quiz' };
   }  
};


const submitQuiz = async (quizId) => {
   try {
      const response = await axiosiosinstance.get(API_PATHS.QUIZZES.GET_QUIZ_BY_ID(quizId),  { answers });
      return response.data;
   } catch (error) {
       throw error.response?.data || { message: 'Failed to submit quiz' };
   }  
};

const getQuizResults = async (quizId) => {
   try {
      const response = await axiosiosinstance.get(API_PATHS.QUIZZES.GET_QUIZ_BY_ID(quizId));
      return response.data;
   } catch (error) {
       throw error.response?.data || { message: 'Failed to fetch quiz results' };
   }  
};

const deleteQuiz = async (quizId) => {
   try {
      const response = await axiosiosinstance.get(API_PATHS.QUIZZES.GET_QUIZ_BY_ID(quizId));
      return response.data;
   } catch (error) {
       throw error.response?.data || { message: 'Failed to delete quiz' };
   }  
};

const quizService = {
    getQuizzesForDocument,
    getQuizById,
    submitQuiz,
    getQuizResults,
    deleteQuiz,
};

export default quizService;
