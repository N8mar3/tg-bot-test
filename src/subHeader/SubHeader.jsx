import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../header/AnimatedText.jsx";
import "./SubHeader.css";
import { TgHook } from "../hooks/Telegram.jsx";

export default function SubHeader() {
    const [replay, setReplay] = useState(true);

    const {user, onClose} = TgHook();
  // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading1",
            text: "Алёна Усенко" },
        {
            type: "heading2",
            text: "Профессиональный коуч"
        },
        {
            type: "heading3",
            text: "Поможет тебе с личностным ростом"}
    ];
    
    const container = {
        visible: {
        transition: {
            staggerChildren: 0.025
        }
        }
    };

    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
        setReplay(true);
        }, 600);
    };

    return (
        <motion.div
            className="subHeader"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
        >
            <div className="container">
                {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
                })}
            </div>
            <button onClick={onClose}>Close</button>
            <button onClick={handleReplay}>
                Replay <span>⟲</span>
            </button>
            <div>{user?.username}</div>
        </motion.div>   
    );
}
