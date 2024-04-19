/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { useSelector } from "react-redux";
import { getTitleAndExplanation } from "../../redux/selectors";







const Details:React.FC = ()=>{

    const {title,description} = useSelector(getTitleAndExplanation);
    

return(<div style={{padding:10}}>
    <div style={{color:'white', fontSize:30, textAlign:'center', width:'100%', fontWeight:'200'}}>{title}</div>
    <div style={{color:'white', marginTop:30, fontSize:20, marginBottom:200, textAlign:'left'}}>{description}</div>

 
</div>);


}
export default Details;
