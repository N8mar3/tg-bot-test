import React from "react";
import "./SubHeader.css";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

interface Props {
  text: string;
  colorA: string;
  colorB: string;
  colorC: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 0,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1
    }
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1
    }
  }
};

function Card({ text, colorA, colorB, colorC }: Props) {

  const speed = -5;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * speed);

  return (
    <motion.div style={{ y: y }}>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 1 }}
        animate={{ color: [colorA, colorB, colorC] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="card"
          variants={cardVariants}
        >
          <p className="text">
            {text}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const food: [string, string, string, string][] = [
  ["Карьерным ростом1", "#0af", "#1a7", "#fa7"],
  ["Карьерным ростом2", "#1af", "#5a5", "#fa6"],
  ["Карьерным ростом3", "#2af", "#5a5", "#fa5"],
  ["Карьерным ростом4", "#3af", "#5a5", "#fa4"],
  ["Карьерным ростом5", "#4af", "#5a5", "#fa3"],
  ["Карьерным ростом6", "#5af", "#5a5", "#fa2"],
  ["Карьерным ростом7", "#6af", "#5a5", "#fa1"],
  ["Карьерным ростом8", "#7af", "#5a5", "#fa0"]
];

export default function SubHeader() {
  return food.map(([text, colorA, colorB, colorC]) => (
    <Card text={text} colorA={colorA} colorB={colorB} colorC={colorC} key={text} />
  ));
}
