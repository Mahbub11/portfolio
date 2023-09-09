import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as Rick } from "../Asset/svg/rick.svg";
import Keyboard from "../Asset/motion/Keyboard";

const transition = {
  duration: 2,
  ease: "easeInOut",
};

const animateIn = {
  pathLength: 1,
  pathOffset: 0,
};
const animateOut = {
  pathLength: 1,
  pathOffset: 1,
};
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-[100vh] relative shadow-md ">
      <div className="absolute w-full h-[70%] z-50">
        <div className="flex gap-5 w-full">
          <div
            className="text-7xl stroke-white
                     rounded-md flex justify-center mt-[5rem] w-full h-[40rem] text-white"
          >
            <div className="flex:col gap-2">
              <Keyboard></Keyboard>
              <p className="mt-5 text-center ">I Do Code</p>
            </div>
          </div>
          <div className="text-7xl stroke-white bg-indigo-300/20 rounded-md flex justify-center m-[5rem] w-full h-[40rem] text-white">
            <span className="mt-5">
              <Rick></Rick>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 p-1 blur-sm opacity-60">
        {/* <div className=" border-3  w-[50%] h-[10rem]"></div> */}
        <div className=" border-3 w-[100%] m-auto">
          <ul className="">
            <motion.li
              initial={{ width: "0vw", x: "0" }}
              animate={{ width: "70%", x: "0", opacity: [0, 0.4] }}
              transition={{ duration: 1.3, origin: 2 }}
            >
              <div className="bg-green-800  rounded-md  w-full h-[120px] mt-4 rounded-r-3xl "></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "90vw", opacity: 10 }}
              animate={{ width: "100%", x: "0", scale: 1 }}
              transition={{ duration: 1.7, origin: 1 }}
            >
              <div className="bg-green-800 w-full h-[2rem] mt-5  rounded-md shadow-md"></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "0" }}
              animate={{ width: "90%", x: "0", opacity: [0, 0.4] }}
              transition={{ duration: 2, origin: 2 }}
            >
              <div className="bg-indigo-400 w-[40%] h-[3rem] m-3 rounded-md shadow-md"></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "40vw" }}
              animate={{ width: "60%", x: "0" }}
              transition={{ duration: 1.4, origin: 2 }}
            >
              <div className="bg-green-800 w-full h-[4rem] m-5 rounded-md shadow-md"></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "0" }}
              animate={{ width: "100%", x: "0", opacity: [0, 0.4] }}
              transition={{ duration: 2, origin: 2 }}
            >
              <div className="bg-green-800 w-full h-[2rem]  rounded-md shadow-md"></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "50vw" }}
              animate={{ width: "80%", x: "0", opacity: [0, 0.4] }}
              transition={{ duration: 1, origin: 2 }}
            >
              <div className="bg-indigo-400 w-fll h-[3rem] m-3 rounded-md shadow-md"></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "0" }}
              animate={{ width: "90%", x: "0" }}
              transition={{ duration: 2, origin: 2 }}
            >
              <div className="bg-green-800 w-[full] h-[4rem] m-5 rounded-md shadow-md"></div>
            </motion.li>
            {/* <motion.li
                    initial={{ width: "0vw", x: "20vw" }}
                    animate={{ width: "60%", x: '0',opacity: [0, 0.4] }}
                    transition={{ duration: .5, origin: 2 }}>
                        <div className="bg-indigo-300 w-full h-[120px] m-10 rounded-r-3xl shadow-md"></div>
                    </motion.li> */}
            <motion.li
              initial={{ width: "0vw", x: "0" }}
              animate={{ width: "100%", x: "0" }}
              transition={{ duration: 1, origin: 2 }}
            >
              <div className="bg-green-800 w-full h-[2rem]  rounded-md shadow-md"></div>
            </motion.li>

            <motion.li
              initial={{ width: "0vw", x: "50vw" }}
              animate={{ width: "50%", x: "0", opacity: [0, 0.4] }}
              transition={{ duration: 1, origin: 2 }}
            >
              <div className="bg-green-800 w-fll h-[3rem] m-3 rounded-md shadow-md"></div>
            </motion.li>
            <motion.li
              initial={{ width: "0vw", x: "0" }}
              animate={{ width: "80%", x: "0" }}
              transition={{ duration: 1, origin: 2 }}
            >
              <div className="bg-indigo-400 w-full h-[2rem]  rounded-md shadow-md"></div>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};
