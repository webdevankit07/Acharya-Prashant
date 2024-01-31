import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const videoData_API = import.meta.env.VITE_ALL_DATA;
const faqData_API = import.meta.env.VITE_FAQ_DATA;
const courceTags_API = import.meta.env.VITE_COURCE_TAGS;

//! fetching all video Data....
export const getVideoData = createAsyncThunk('getVideoData', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${videoData_API}${id}`);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

//! fetching all video Data....
export const getFaqData = createAsyncThunk('getFaqData', async (lang, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${faqData_API}${lang}`);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

//! fetching all cource Tags....
export const getCourceTags = createAsyncThunk('getCourceTags', async (rejectWithValue) => {
    try {
        const { data } = await axios.get(courceTags_API);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const allData = createSlice({
    name: 'All Data',
    initialState: {
        isLoading: true,
        language: 'hi',
        heroSection: [],
        videoSeries: [],
        otherVideos: [],
        faqData: [],
        courceTags: [],
        isError: '',
    },
    reducers: {
        setLanguage: (state, { payload }) => {
            state.language = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getVideoData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getVideoData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.heroSection = payload.details;
                state.videoSeries = payload.courses;
                state.otherVideos = payload.relatedContent;
            })
            .addCase(getVideoData.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload);
                state.isError = payload;
            })
            .addCase(getFaqData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFaqData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.faqData = payload;
            })
            .addCase(getFaqData.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload);
                state.isError = payload;
            })
            .addCase(getCourceTags.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCourceTags.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.courceTags = payload;
            })
            .addCase(getCourceTags.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload);
                state.isError = payload;
            });
    },
});

export default allData.reducer;
export const { setLanguage } = allData.actions;
