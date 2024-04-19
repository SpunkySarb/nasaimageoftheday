/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { useSelector } from "react-redux";
import { getMediaTypeAndMediaLink } from "../../redux/selectors";
import { Image, Result } from "antd";
import classes from "./ImageOrVideo.module.css";

const ImageOrVideo: React.FC = () => {
  const { mediaLink, media_type } = useSelector(getMediaTypeAndMediaLink);

  if (media_type === "video") {
    return <iframe src={mediaLink} className={classes.media} />;
  }

  return (<>
  {mediaLink!=="future_date" && <Image src={mediaLink} height={500}  className={classes.media} />}
  {mediaLink==="future_date" && <Result status={404} subTitle={<div style={{color:'white'}}>Cannot See Future Images</div>} />}
  </>);
};
export default ImageOrVideo;
