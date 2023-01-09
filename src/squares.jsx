import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './square.css';

const Square = ({ value, color, index, preIndex}) => {
  // Create a reference to the square element
  const squareRef = useRef(null);

  


  const finalTop = Math.floor(index/4)*100 + 5 + 'px';
  const finalLeft = Math.floor(index%4)*100 + 5 + 'px';

  const left = preIndex != '-1' ?  Math.floor(preIndex%4)*100 + 5 + 'px' : finalLeft;
  const top =  preIndex != '-1' ?  Math.floor((preIndex/4))*100 + 5 + 'px' : finalTop;

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100
  }
  return (
    <motion.div 
      className="square" 
      style={{ backgroundColor: color}}
      onClick={()=>console.log(index)}
      initial={{left:left, top:top, scale: preIndex!='-1'? 1 : 0}}
      animate={{left:finalLeft, top:finalTop, scale: 1 }}
      transition={{duration:.1, spring }}
    >
      {value}
    </motion.div>
  );
};

export default Square;
