"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

const FramerMotion = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="w-screen h-screen flex items-center p-12">
      <div className="flex items-center gap-12">
        <div className="left w-[60%] space-y-4">
          <motion.div
            initial={{ left: -600, position: "relative" }}
            animate={{ left: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl font-bold">Welcome to Pen Programmer</h1>
          </motion.div>
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus natus iusto adipisci rem libero cupiditate impedit, pariatur ut esse minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem facere error ea, sit delectus rerum debitis nobis. Autem aspernatur ipsum modi mollitia sequi sed incidunt. Tempore molestiae harum nostrum ad dolor sint inventore error dignissimos corporis, illum sit modi deserunt magnam. Aliquid dolore, accusantium quos officiis vitae recusandae in."
                )
                .pauseFor(0) // Pause for 0 milliseconds before changing delay
                .changeDelay(5) // Change delay to 5 milliseconds (typing speed)
                .start();
            }}
          /> */}
          <motion.div
            initial={{ top: -600, position: "relative" }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              natus iusto adipisci rem libero cupiditate impedit, pariatur ut
              esse minima. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sequi autem facere error ea, sit delectus rerum debitis
              nobis. Autem aspernatur ipsum modi mollitia sequi sed incidunt.
              Tempore molestiae harum nostrum ad dolor sint inventore error
              dignissimos corporis, illum sit modi deserunt magnam. Aliquid
              dolore, accusantium quos officiis vitae recusandae in.
            </p>
          </motion.div>

          <motion.div
            initial={{
              top: -600,
              left: -600,
              rotate: -360,
              position: "relative",
            }}
            animate={{ top: 0, left: 0, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              consequuntur.
            </p>
          </motion.div>
          <motion.div
            initial={{
              top: -window.innerHeight,
              right: -window.innerWidth,
              position: "relative",
            }}
            animate={{ top: 0, right: 0 }}
            transition={{ duration: 1 }}
          >
            <Button>Let's Explore</Button>
          </motion.div>
        </div>
        <div className="right flex-1 drag-area" ref={constraintsRef}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={
                "https://bootstrapmade.com/demo/templates/Butterfly/assets/img/hero-img.png"
              }
              width={300}
              height={300}
              className="w-full "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FramerMotion;
