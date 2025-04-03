import React, { useState } from "react";
import styles from "./Project.module.css";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  highlights: string[];
  tags: string[];
  galleryImages: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  highlights,
  tags,
  galleryImages,
}) => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className={styles.projectSection}>
      <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.projectTags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.projectHighlights}>
            <p className={styles.highlightTitle}>Project Highlights:</p>
            <ul>
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <button
            className={styles.watchButton}
            onClick={() => setShowGallery(!showGallery)}
          >
            {showGallery ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
      {showGallery && (
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`${title} gallery ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "HOME NÀO",
      image: "/src/assets/project_homenao.svg",
      description:
        "HOME Nào, a comprehensive homestay booking platform that we meticulously crafted from concept to deployment. This project involved a full spectrum of development, including UI/UX design, front-end and back-end development, and the creation of an intuitive dashboard for managing guest information and revenue tracking.",
      highlights: [
        "User-Centric Design: We developed an engaging and intuitive interface that ensures a seamless booking experience for users.",
        "Responsive Front-End Development: Our team implemented a responsive design, providing optimal viewing across various devices and screen sizes.",
        "Robust Back-End Architecture: We built a secure and scalable back-end system to handle bookings, user data, and transactions efficiently.",
        "Comprehensive Dashboard: To empower homestay owners, we designed a dashboard that offers real-time insights into guest information and revenue metrics.",
      ],
      tags: ["UI/UX", "Development"],
      galleryImages: [
        "/src/assets/project_homenao_1.svg",
        "/src/assets/project_homenao_2.svg",
        "/src/assets/project_homenao_3.svg",
      ],
    },
    {
      title: "CNCSI",
      image: "/src/assets/project_cncsi.svg",
      description:
        "We had the awesome opportunity to collaborate with Công ty Cổ Phần Điều tư và Dịch vụ kỹ thuật CNC (CNC SI), a standout in Vietnam's industrial scene. Our mission? To amp up their digital game and give their brand a fresh, modern vibe.",
      highlights: [
        "Modern UI/UX Design: Created an intuitive and professional interface",
        "Responsive Implementation: Ensured perfect display across all devices",
        "Interactive Features: Added dynamic elements to enhance user engagement",
        "Performance Optimization: Implemented best practices for fast loading",
      ],
      tags: ["UI/UX", "Development"],
      galleryImages: [
        "/src/assets/project_cncsi_1.svg",
        "/src/assets/project_cncsi_2.svg",
        "/src/assets/project_cncsi_3.svg",
      ],
    },
    {
      title: "AIESEC IN VIETNAM",
      image: "/src/assets/project_aiesecvn.svg",
      description:
        "We had the privilege of collaborating with AIESEC in Vietnam, the largest youth-run organization worldwide, to revamp their online presence. Our goal was to create a digital platform that resonates with the energy and ambition of young leaders across the nation.",
      highlights: [
        "Youth-Focused Design: Created an energetic and engaging interface",
        "Content Management: Implemented easy-to-use content updating system",
        "Event Integration: Added features for event management and registration",
        "Mobile-First Approach: Ensured perfect mobile experience for young users",
      ],
      tags: ["UI/UX", "Development"],
      galleryImages: [
        "/src/assets/project_aiesecvn_1.svg",
        "/src/assets/project_aiesecvn_2.svg",
        "/src/assets/project_aiesecvn_3.svg",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleBox}>
          OUR PREVIOUS
          <div className={styles.blackCircle} />
        </div>
        <div className={styles.blackCircle} />
        <div className={styles.redCircle} />
        <div className={styles.titleBox}>
          <div className={styles.redCircle} />
          PROJECT
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
