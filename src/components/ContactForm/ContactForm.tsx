import { useState } from "react";
import styles from "./ContactForm.module.css";

interface Tag {
  id: string;
  label: string;
}

const ContactForm = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const interests: Tag[] = [
    { id: "web-dev", label: "Web Development" },
    { id: "branding", label: "Branding Design" },
    { id: "ui-ux", label: "UI UX Design" },
    { id: "mini-app", label: "Mini-App" },
    { id: "others", label: "Others" },
  ];

  const budgets: Tag[] = [
    { id: "budget-1", label: "< 10.000.000" },
    { id: "budget-2", label: "10.000.000 - 15.000.000" },
    { id: "budget-3", label: "15.000.000 - 20.000.000" },
    { id: "budget-4", label: "20.000.000 - 25.000.000" },
    { id: "budget-5", label: "25.000.000 - 30.000.000" },
    { id: "budget-6", label: "> 30.000.000" },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          YOU NEED A WEBSITE FOR YOUR BUSINESS?
        </h2>
        <h3 className={styles.subTitle}>BUT DON'T KNOW WHERE TO START?</h3>
      </div>

      <h1 className={styles.formTitle}>TELL US ABOUT IT</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="Your name"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="abc@yourmail.com"
          />
        </div>

        <div className={styles.interestSection}>
          <label className={styles.label}>I'm interested in..</label>
          <div className={styles.tags}>
            {interests.map((interest) => (
              <div
                key={interest.id}
                className={`${styles.tag} ${
                  selectedInterests.includes(interest.id)
                    ? styles.tagSelected
                    : ""
                }`}
                onClick={() => toggleInterest(interest.id)}
              >
                {interest.label}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.budgetSection}>
          <label className={styles.label}>Project budget</label>
          <div className={styles.budgetTags}>
            {budgets.map((budget) => (
              <div
                key={budget.id}
                className={`${styles.tag} ${
                  selectedBudget === budget.id ? styles.tagSelected : ""
                }`}
                onClick={() => setSelectedBudget(budget.id)}
              >
                {budget.label}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Tell us more about your project
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            placeholder="We're always here to support"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
