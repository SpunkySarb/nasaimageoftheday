/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { useSelector } from "react-redux";
import { getMediaTypeAndMediaLink } from "../../redux/selectors";
import { Image, Result } from "antd";
import classes from "./ImageOrVideo.module.css";
import { motion } from "framer-motion";

const ImageOrVideo: React.FC = () => {
  const { mediaLink, media_type } = useSelector(getMediaTypeAndMediaLink);

  if (media_type === "video") {
    return (
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <iframe src={mediaLink} className={classes.media} />
      </motion.div>
    );
  }

  return (
    <>
      {mediaLink !== "future_date" && (
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Image src={mediaLink} height={500} className={classes.media} />
        </motion.div>
      )}
      {mediaLink === "future_date" && (
        <Result
          status={404}
          subTitle={
            <div style={{ color: "white" }}>Cannot See Future Images</div>
          }
        />
      )}
    </>
  );
};
export default ImageOrVideo;
