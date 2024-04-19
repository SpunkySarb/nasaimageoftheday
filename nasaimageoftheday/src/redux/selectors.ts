import { AppState } from "./store";

export const getSelectedDate = (state:AppState)=>state.date;

export const getMediaTypeAndMediaLink = (state:AppState)=>({media_type:state.media_type, mediaLink:state.mediaLink});

export const getTitleAndExplanation = (state:AppState)=>({title:state.title, description:state.description});