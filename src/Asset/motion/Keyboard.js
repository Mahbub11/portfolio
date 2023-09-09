import React from "react";
import { motion } from "framer-motion";

const transition = {
    duration: 5,
    ease: "easeInOut"
  };

  const animateIn = {
    pathLength: 1,
    pathOffset: 0
  };
  const animateOut = {
    pathLength: 1,
    pathOffset: 1
  };
export default function Keyboard() {
  return (
  
      <motion.svg
        fill="none"
        height="300px"
        width="300px"
        version="1.1"
        id="Capa_1"
        
        viewBox="0 0 465 465"
    
      >
        
          <motion.path
           transition={transition}
           initial={{ pathLength: 0, pathOffset: 0 }}
           animate={true ? animateIn : animateOut}
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={3}
            d="M439.11,155.769h-71.125v-11.557c0-22.915-18.643-41.557-41.557-41.557H138.571c-14.644,0-26.557-11.914-26.557-26.557V7.5
		c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v68.598c0,22.915,18.643,41.557,41.557,41.557h187.857
		c14.644,0,26.557,11.914,26.557,26.557v11.557H25.89c-14.275,0-25.89,11.614-25.89,25.89V439.11C0,453.386,11.614,465,25.89,465
		H439.11c14.275,0,25.89-11.614,25.89-25.89V181.659C465,167.383,453.386,155.769,439.11,155.769z M450,439.11
		c0,6.004-4.885,10.89-10.89,10.89H25.89C19.885,450,15,445.115,15,439.11V181.659c0-6.004,4.885-10.89,10.89-10.89H439.11
		c6.005,0,10.89,4.885,10.89,10.89V439.11z"
          />
          <path
           transition={transition}
           initial={{ pathLength: 0, pathOffset: 0 }}
           animate={true ? animateIn : animateOut}
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2} d="M298.879,388.057H166.121c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h132.758c4.143,0,7.5-3.358,7.5-7.5
		S303.021,388.057,298.879,388.057z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M104.529,331.275H68.947c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.582c4.143,0,7.5-3.358,7.5-7.5
		S108.672,331.275,104.529,331.275z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M396.053,331.275h-35.582c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.582c4.143,0,7.5-3.358,7.5-7.5
		S400.195,331.275,396.053,331.275z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M298.879,331.275h-35.583c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.583c4.143,0,7.5-3.358,7.5-7.5
		S303.021,331.275,298.879,331.275z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M166.121,346.275h35.583c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-35.583c-4.143,0-7.5,3.358-7.5,7.5
		S161.979,346.275,166.121,346.275z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M104.529,274.494H68.947c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.582c4.143,0,7.5-3.358,7.5-7.5
		S108.672,274.494,104.529,274.494z"/>
	<path 
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3}d="M396.053,274.494h-35.582c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.582c4.143,0,7.5-3.358,7.5-7.5
		S400.195,274.494,396.053,274.494z"/>
	<path 
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3}d="M298.879,274.494h-35.583c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.583c4.143,0,7.5-3.358,7.5-7.5
		S303.021,274.494,298.879,274.494z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M166.121,289.494h35.583c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-35.583c-4.143,0-7.5,3.358-7.5,7.5
		S161.979,289.494,166.121,289.494z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M104.529,217.712H68.947c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.582c4.143,0,7.5-3.358,7.5-7.5
		S108.672,217.712,104.529,217.712z"/>
	<path 
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3}d="M396.053,217.712h-35.582c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.582c4.143,0,7.5-3.358,7.5-7.5
		S400.195,217.712,396.053,217.712z"/>
	<path
     transition={transition}
     initial={{ pathLength: 0, pathOffset: 0 }}
     animate={true ? animateIn : animateOut}
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={3} d="M298.879,217.712h-35.583c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h35.583c4.143,0,7.5-3.358,7.5-7.5
		S303.021,217.712,298.879,217.712z"/>
	<path
     transition={transition}
           initial={{ pathLength: 0, pathOffset: 0 }}
           animate={true ? animateIn : animateOut}
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={3} d="M166.121,232.712h35.583c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-35.583c-4.143,0-7.5,3.358-7.5,7.5
		S161.979,232.712,166.121,232.712z"/>
          
    
      </motion.svg>
   
  );
}
