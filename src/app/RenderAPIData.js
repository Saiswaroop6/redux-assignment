import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData,deletePhoto } from "../store/RenderData";
import "./RenderAPIData.css";

export default function RenderAPIData() {
  const data = useSelector((state) => state.allData.data);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    
  }, [dispatch]);
  

  return (
    <div>
      {data.length&&<button className="header" onClick={() => dispatch( deletePhoto())}>Remove 1 photo</button>}
      {data.length===0&&<p className="error">No photos to delete</p>}
      <div>
        {data?.map(each=>{
          return(
            <img src={each.thumbnailUrl} alt='img' className="img-style"/>
          )
        })}
        </div>
    </div>
  );
}
