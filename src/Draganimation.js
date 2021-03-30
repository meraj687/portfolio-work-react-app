import React from 'react';

function Draganimation(){

 const constraintsRef = useRef(null)

return (
  <motion.div ref={constraintsRef}>
    <motion.div
      drag
      dragConstraints={constraintsRef}
    />
  </motion.div>
)

}

export default Draganimation;