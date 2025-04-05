import { Typography } from "@mui/material";
import styles from "./OurProject.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ title, image, tags }: ProjectCardProps) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    navigate(`/projects`); // Redirect to project page
  };
  return (
    <div className={styles.projectCard} onClick={handleCardClick}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurProject = () => {
  const projects = [
    {
      title: "HÔME NÀO",
      image: "/src/assets/project_homenao.svg",
      tags: ["UI/UX", "Development"],
    },
    {
      title: "CNCSI",
      image: "/src/assets/project_cnc.svg",
      tags: ["UI/UX", "Development"],
    },
    {
      title: "AIESEC in Vietnam",
      image: "/src/assets/project_aiesec.svg",
      tags: ["UI/UX"],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography component="h2" className={styles.title}>
          Our project
        </Typography>
        <div className={styles.arrowButton}>
          <ArrowForwardIcon />
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>

      <div className={styles.bottomDecoration} />
    </div>
  );
};

export default OurProject;
