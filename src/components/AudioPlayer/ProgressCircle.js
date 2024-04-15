import React from 'react';
import './progresscircle.css';
import music from '../../assets/Log-modified.png';

const Circle = ({percentage, color, size, strokewidth}) => {
  const rad= (size/2) - 10;
  const circ = (2*Math.PI*rad) - 20;
  const strokepct = ((100 - Math.round(percentage)) * circ)/100;

  return(
      <circle
        r={rad}
        cx="50%"
        cy="50%"
        fill="transparent"
        stroke={strokepct !== circ? color : ""}
        strokeWidth={strokewidth}
        strokeDasharray={circ}
        strokeDashoffset={percentage?strokepct:0}
        strokeLinecap="round"
        >
      </circle>

  );
};

export default function ProgressCircle({percentage, isPlaying, size, color, image}) {
  return (
    <div className='progresscircle flex'>
      <svg width={size} height={size}>
        <g>
          <Circle strokewidth={"0.4rem"} color="#3B4F73" size={size} />
          <Circle strokewidth={"0.6rem"} percentage={percentage} size={size} color={color} />
        </g>

        <defs>
          <clipPath id="mycircle">
            <circle cx="50%" cy="50%" r={size/2 - 30} fill="#fff"/>
          </clipPath>
          <clipPath id="myinnercircle">
            <circle cx="50%" cy="50%" r={size/2 - 100} fill="#fff" />
          </clipPath>
        </defs>

        <image 
          className={isPlaying? "active" : ""}
          x={30}
          y={30}
          width={2*(size/2-30)}
          height={2*(size/2 - 30)}
          href={music}
          clipPath="url(#mycircle)" 
        />
        <image
          className={isPlaying? "active": ""}
          x={100}
          y={100}
          width={2*(size/2-100)}
          height={2*(size/2-100)} 
          href={image}
          clipPath="url(#myinnercircle)"
        />
      </svg>
    </div>
  )
}
