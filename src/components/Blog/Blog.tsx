import styles from "./Blog.module.css";

interface BlogPost {
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogItem = ({ image, date, title, description }: BlogPost) => {
  return (
    <div className={styles.blogItem}>
      <img src={image} alt={title} className={styles.blogImage} />
      <div className={styles.blogContent}>
        <div className={styles.date}>{date}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      image: "/src/assets/blog_1.svg",
      date: "Jan 1 2025",
      title: "The Future of Web Design: Trends to Watch in 2025",
      description:
        "Stay ahead of the curve with the latest web design trends shaping the digital world in 2025",
    },
    {
      image: "/src/assets/blog_2.svg",
      date: "Jan 1 2025",
      title: "How a Well-Designed Website Can Boost Your Brand's Success",
      description:
        "Stay ahead of the curve with the latest web design trends shaping the digital world in 2025",
    },
    {
      image: "/src/assets/blog_3.svg",
      date: "Jan 1 2025",
      title:
        "Psychology of Colors in Web Design: How to Influence User Behavior",
      description:
        "Colors do more than just make a website look good—they impact emotions, decisions, and brand perception",
    },
  ];

  const featuredPost = {
    image: "/src/assets/blog_4.svg",
    date: "MAR 2025",
    title: "HOW TO MAKE YOUR WEBSITE LOOK BETTER?",
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.header}>Blog</h2>
        <div className={styles.blogList}>
          {blogPosts.map((post, index) => (
            <BlogItem key={index} {...post} />
          ))}
        </div>
      </div>
      <div className={styles.featuredPost}>
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className={styles.featuredImage}
        />
        <div className={styles.featuredContent}>
          <div className={styles.featuredDate}>{featuredPost.date}</div>
          <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Blog;
