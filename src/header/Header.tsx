import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText.jsx";
import "./Header.css";
import { TgHook } from "../hooks/Telegram.jsx";

export default function Header() {
    const [replay, setReplay] = useState(true);

    const {user, onClose} = TgHook();

  // Placeholder text data, as if from API
    const placeholderText_1 = [
        {
            type: "heading2",
            text: "Профессиональный коуч"
        }
    ];

    const placeholderText_2 = [
        {
            type: "heading2",
            text: "Поможет тебе -"
        },
        {
            type: "heading3",
            text: `${user}`
        }
    ];

    const nameHeaderText = [
        {
            type: "heading1",
            text: "Алёна Усенко"
        }
    ]
    
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
            className="Header"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
        >
            <div className="container">
                {placeholderText_1.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
                })}
            </div>
            <motion.div
                animate={{ color: ["rgb(240, 53, 228)", "rgb(245, 28, 111)", "rgb(188, 16, 236)"] }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="container"
            >
                {nameHeaderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />
                })}
            </motion.div>
            <div className="container">
                {placeholderText_2.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
                })}
            </div>
            <button onClick={onClose}>Close</button>
            <button onClick={handleReplay}>
                Replay <span>⟲</span>
            </button>
        </motion.div>   
    );
}
