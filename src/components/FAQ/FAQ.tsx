import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  icon: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      icon: "🔥",
      question: "Why should I choose Origami Art?",
      answer:
        "Because we're not just a website and branding service - we're digital magicians. We're here to help your brand grow and stand out!",
    },
    {
      icon: "⬛",
      question: "Do I really need a custom website?",
      answer:
        "Unless you want your brand to blend in like wallpaper... yes! A custom website ensures you're unforgettable for a good way! 😉",
    },
    {
      icon: "⬛",
      question: "What's a mini-app? And why Zalo?",
      answer:
        "Think of a mini-app as a tiny powerhouse - small but mighty! Zalo is huge in Vietnam, and we help you tap into its 75+ million users with beautiful and engaging mini-apps.",
    },
    {
      icon: "🎨",
      question: "Can you make my brand look cooler?",
      answer:
        "Of course! We create logos, color palettes, and brand designs that scream 'professional' while whispering 'effortlessly cool'.",
    },
    {
      icon: "⌛",
      question: "How long does it take to build a website or mini-app?",
      answer:
        "Depends on how fancy you want it! Simple projects take a few weeks, while complex ones take longer. But don't worry, we work fast - no turtle pace here! 🐢",
    },
    {
      icon: "💰",
      question: "How much does it cost?",
      answer:
        "Let's just say... cheaper than a yacht, but more valuable than a cup of coffee. ☕ Hit us up for a custom quote!",
    },
    {
      icon: "📞",
      question: "How do we get started?",
      answer:
        "Easy - just message us! We'll talk, plan, and build something amazing together! ✨",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.redPill}>Questions?</div>
        <div className={styles.blackPill}>We got answers</div>
      </div>

      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleQuestion(index)}
            >
              <span className={styles.questionIcon}>{item.icon}</span>
              <span className={styles.questionText}>{item.question}</span>
              <span
                className={`${styles.arrow} ${
                  openIndex === index ? styles.arrowOpen : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
