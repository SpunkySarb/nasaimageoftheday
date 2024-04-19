/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/
import { useDispatch, useSelector } from 'react-redux';
import classes from './Home.module.css';
import { getSelectedDate } from '../../redux/selectors';
import ImageOrVideo from './ImageOrVideo';
import Details from './Details';
import { useEffect } from 'react';
import axios from 'axios';
import { API } from '../../utils/keys';
import { AppState, setContent, setLoadingStatus } from '../../redux/store';
import LoadingSkeleton from './LoadingSkeleton';






const Home:React.FC = ()=>{

    const contentDispatcher = useDispatch();

    const date = useSelector(getSelectedDate);
    const isLoading = useSelector((state:AppState)=>state.isLoading);


    
 useEffect(()=>{
    contentDispatcher(setLoadingStatus(true));

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API}&date=${date}`)
    .then(response=>{

        const {explanation, media_type, title, hdurl,url } = response.data;
        contentDispatcher(setContent({description:explanation, title:title, media_type, mediaLink:media_type==="video"?url:hdurl}));
        contentDispatcher(setLoadingStatus(false));

    })
    .catch((err:any)=>{
        contentDispatcher(setLoadingStatus(false));

    });



 },[date]);

 if(isLoading){
    return <LoadingSkeleton/>
 }

return(<div className={classes.container}>
<ImageOrVideo/>
<Details/>
</div>);


}
export default Home;
