/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { Skeleton } from "antd";

import classes from "../Content/Home.module.css";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className={classes.container} style={{marginTop:30}}>
      <Skeleton.Image
        active
        style={{
          width: 300,
          justifySelf: "center",
          marginLeft: 30,
          height: 300,
        }}
      />
     {window.innerWidth<700 && <div>
        <Skeleton.Input
          className={classes.pc}
          style={{ marginTop: 50 }}
        ></Skeleton.Input>

        <Skeleton style={{ marginTop: 50 }} />
      </div>}

      {window.innerWidth>700 && <div style={{marginLeft:300}}>
        <Skeleton.Input
          className={classes.pc}
          style={{ marginTop: 50, width:300 }}
        ></Skeleton.Input>

        <Skeleton style={{ marginTop: 50, width:500 }} />
      </div>}
    </div>
  );
};
export default LoadingSkeleton;
