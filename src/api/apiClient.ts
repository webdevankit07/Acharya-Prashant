import { FaqType, LanguageType, ResDataType, TagResponseType, ValidationError } from '@/types';
import axios from 'axios';
import { promises } from 'dns';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// Axios...
export const Axios = axios.create({
    baseURL: apiBaseUrl,
});

// handle Axios errors...
export const handleAxiosError = async (error: unknown) => {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        return error.response?.data.message;
    } else {
        const err = error as Error;
        return err.message;
    }
};

export const getAllData = async () => {
    try {
        const { data } = await Axios.get('/series/optuser/course-series-eeb9d3');
        return data as ResDataType;
    } catch (error) {
        const err = await handleAxiosError(error);
        throw new Error(err);
    }
};

export const getTags = async () => {
    try {
        const { data } = await Axios.get('/tags');

        return data as TagResponseType;
    } catch (error) {
        const err = await handleAxiosError(error);
        throw new Error(err);
    }
};

export const getFaqData = async (language: LanguageType) => {
    try {
        const { data } = await Axios.get(`/faqs?language=${language === 'hi' ? 'hindi' : 'english'}`);
        return data as FaqType[];
    } catch (error) {
        const err = await handleAxiosError(error);
        throw new Error(err);
    }
};
