import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getTodaysDate, parseDateString } from "../utils/dateHandlers";


export type AppState = {date:string, mediaLink:string, media_type:"image"|"video", title:string, description:string, isLoading:boolean}

const initialState:AppState = {date:getTodaysDate(), media_type:'image', mediaLink:'',title:'',description:'', isLoading:true}


const appSlice = createSlice({
    name:'appSlice',
    initialState,
    reducers:{
        setDate:(state,action:{payload:string})=>{

            if(parseDateString(action.payload)>parseDateString(getTodaysDate())){

                state.title="😬OOPS.. WRONG DATE 📅"
                state.mediaLink="future_date"
                state.description=`The NASA Image of the Day API is designed to provide users with access to the most recent images captured by various NASA missions or telescopes. Allowing only today's and past dates ensures that users can access the latest available imagery in real-time. This real-time nature is particularly important for users who rely on up-to-date information for educational, research, or informational purposes.`

            }else{
                state.date = action.payload; 
            }       
        },
        setLoadingStatus:(state,action:{payload:boolean})=>{
            state.isLoading = action.payload;
        },
        setContent:(state,action:{payload:{mediaLink:string,title:string,description:string, media_type:"image"|"video"}})=>{
            const {mediaLink,description,title,media_type} = action.payload;
            state.mediaLink =mediaLink;
            state.title = title;
            state.media_type= media_type;
            state.description = description;
        }
    }
});



export const {setDate,setContent,setLoadingStatus} = appSlice.actions;

const store = configureStore({reducer:appSlice.reducer});

export default store;