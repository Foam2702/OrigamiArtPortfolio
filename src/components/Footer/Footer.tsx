import styles from "./Footer.module.css";

const Footer = () => {
  const navLinks = [
    { label: "Homepage", href: "#" },
    { label: "About us", href: "#" },
    { label: "Service", href: "#" },
    { label: "Project", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: "/src/assets/fb.svg", href: "#", label: "Facebook" },
    { icon: "/src/assets/linkedin.svg", href: "#", label: "LinkedIn" },
    { icon: "/src/assets/mail.svg", href: "#", label: "Behance" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <img
                src={link.icon}
                alt={link.label}
                className={styles.socialIcon}
              />
            </a>
          ))}
        </div>

        <div className={styles.copyright}>
          © Copyright 2023 - The Origami Art
        </div>
      </div>
    </footer>
  );
};

export default Footer;
