import React from "react";
import "./ProgressBar.css";

function ProgressBar({ percentage }) {
  return (
    <div className={`progress-bar-container`}>
      <div className={`progress-bar `}>
         {percentage.map((chap, index)=> {
              if(chap=="1") return <span key={index} className={'span-true'}></span>
              else return <span key={index}></span>
           
            }
         )}
      </div>
    </div>
  );
}

export default ProgressBar;
