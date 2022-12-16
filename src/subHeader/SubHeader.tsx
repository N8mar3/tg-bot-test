import "./SubHeader.css";
import { motion, useMotionValue } from "framer-motion";


const textes = [
  ["Карьерным ростом1", "#0af", "#1a7", "#fa7"],
  ["Карьерным ростом2", "#1af", "#5a5", "#fa6"],
  ["Карьерным ростом3", "#2af", "#5a5", "#fa5"],
  ["Карьерным ростом4", "#3af", "#5a5", "#fa4"],
  ["Карьерным ростом5", "#4af", "#5a5", "#fa3"],
  ["Карьерным ростом6", "#5af", "#5a5", "#fa2"],
  ["Карьерным ростом7", "#6af", "#5a5", "#fa1"],
  ["Карьерным ростом8", "#7af", "#5a5", "#fa0"]
];

const height = 150;
const padding = 10;
const size = 150;

function getHeight(textes:string[][]) {
  const totalHeight = textes.length * height;
  const totalPadding = (textes.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;
  return totalScroll;
}

export default function SubHeader() {

  const scrollY = useMotionValue(0);

  return (
    <motion.div
      className ="card-container"
      style={{
        overflow: "hidden",
        position: "relative",
        transform: "translateZ(0)",
        cursor: "grab"
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="card-container"
        style={{
            height: getHeight(textes),
            y: scrollY
        }}
        drag="y"
        dragConstraints={{
            top: -getHeight(textes) + size,
            bottom: 0
        }}
      >
        {textes.map(([text, colorA, colorB, colorC]) => {
          return (
            <motion.div
              className="scrollModule"
              animate={{ color: [colorA, colorB, colorC] }}
              transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
              }}
              style={{height: height}}
              key={text}
            >
              {text}
            </motion.div>
            );
          })}
        </motion.div>
    </motion.div>
  );
}