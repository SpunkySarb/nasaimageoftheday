/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { useSelector } from "react-redux";
import { getTitleAndExplanation } from "../../redux/selectors";
import TextWriter from "./TextWriter";







const Details:React.FC = ()=>{

    const {title,description} = useSelector(getTitleAndExplanation);
    

return(<div style={{padding:10}}>
    <div style={{color:'white', fontSize:30, textAlign:'center', width:'100%', fontWeight:'200'}}>

<TextWriter  text={title} speed={30} />

    </div>
    <div style={{color:'white', marginTop:30, fontSize:20, marginBottom:200, textAlign:'left'}}>
    <TextWriter  text={description} speed={2} />

    </div>

 
</div>);


}
export default Details;
