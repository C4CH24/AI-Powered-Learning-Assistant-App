import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const getAllFlashcardSets = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.FLASHCARDS.GET_ALL_SETS);
        return response.data; // Expecting array of flashcard sets
    }
    catch (error) {
        throw error.response?.data || { message: 'Failed to fetch flashcard sets.' };
    }
};

const getFlashcardsForDocument = async (setId) => {
    try {
        const response = await axiosInstance.get(API_PATHS.FLASHCARDS.GET_CARDS_FOR_SET(setId));
        return response.data; // Expecting array of flashcards
    }
    catch (error) {
        throw error.response?.data || { message: 'Failed to fetch flashcards for the document.' };
    }
};

const reviewFlashcard = async (cardId, isCorrect) => {
    try {
        const response = await axiosInstance.post(API_PATHS.FLASHCARDS.REVIEW_FLASHCARD(cardId), { isCorrect });
        return response.data; // Expecting updated flashcard data
    }
    catch (error) {
        throw error.response?.data || { message: 'Failed to review flashcard.' };
    }
};

const toggleStar = async (cardId) => {
    try {
        const response = await axiosInstance.post(API_PATHS.FLASHCARDS.TOGGLE_STAR(cardId));
        return response.data; // Expecting updated flashcard data
    }
    catch (error) {
        throw error.response?.data || { message: 'Failed to toggle star on flashcard.' };
    }   
};

const deleteFlashcardSet = async (setId) => {
    try {
        const response = await axiosInstance.delete(API_PATHS.FLASHCARDS.DELETE_FLASHCARD_SET(setId));
        return response.data; // Expecting success message
    }   
    catch (error) {
        throw error.response?.data || { message: 'Failed to delete flashcard set.' };
    }
};

const flashcardService = {
    getAllFlashcardSets,
    getFlashcardsForDocument,
    reviewFlashcard,
    toggleStar,
    deleteFlashcardSet,
};

export default flashcardService;
