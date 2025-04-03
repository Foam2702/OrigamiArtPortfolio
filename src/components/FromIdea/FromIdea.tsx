import React from "react";
import styles from "./FromIdea.module.css";

const FromIdea = () => {
  const steps = [
    {
      number: "01",
      title: "SPILL THE TEA ON YOUR IDEA",
      description:
        "Tell us your vision! Your ideas, goals, needs and dreams, get it all out there.",
    },
    {
      number: "02",
      title: "LET'S TALK & STRATEGIZE",
      description:
        "Well chat about your project scope, timeline, and budget. Together, well craft a plan that fits your needs perfectly.",
    },
    {
      number: "03",
      title: "THE BIG IDEA REVEAL",
      description:
        "We present our creative concepts and technical solutions before making it happen.",
    },
    {
      number: "04",
      title: "DESIGN & DEVELOPMENT",
      description:
        "Our team gets to work, crafting your vision into reality with pixel-perfect precision.",
    },
    {
      number: "05",
      title: "BUILD, TEST & MAKE IT SHINE",
      description:
        "We develop your project with clean code, testing rigorously to ensure everything works flawlessly before launch.",
    },
  ];

  return (
    <div className={styles.fromIdeaSection}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <span className={styles.fromText}>FROM IDEA</span>
          <span className={styles.toText}>TO REALITY</span>
        </div>
      </div>

      <div className={styles.stepsContainer}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromIdea;
