import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  link: string;
}

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      description:
        "Explore the latest trends shaping the future of web development, from AI-powered tools to revolutionary frameworks that are changing how we build digital experiences.",
      date: "March 15, 2024",
      category: "Web Development",
      image: "/src/assets/blog_1.jpg",
      readTime: "5 min read",
      link: "https://solutiondots.com/blog/software-development/web-development-trends-to-watch/",
    },
    {
      title: "UI/UX Best Practices for Mobile Applications",
      description:
        "Discover essential design principles and practices that will help you create more engaging and user-friendly mobile applications.",
      date: "March 10, 2024",
      category: "UI/UX Design",
      image: "/src/assets/blog_2.png",
      readTime: "4 min read",
      link: "https://medium.com/@chirag.dave/mobile-app-design-ui-ux-principles-best-practices-examples-d71247aa8d41",
    },
    {
      title: "Building Scalable Backend Systems: A Comprehensive Guide",
      description:
        "Learn the key principles and strategies for designing and implementing backend systems that can grow with your business needs.",
      date: "March 5, 2024",
      category: "Backend Development",
      image: "/src/assets/blog_3.png",
      readTime: "7 min read",
      link: "https://www.amazon.com/Mastering-Spring-Boot-3-0-comprehensive/dp/1803230789#:~:text=Explore%20Spring%20Boot%203.0%20by%20delving%20into%20scalable,and%20robust%20backend%20systems%20using%20the%20latest%20techniques.",
    },
    {
      title: "The Impact of AI on Modern Web Design",
      description:
        "Explore how artificial intelligence is revolutionizing web design and what it means for designers and developers in the coming years.",
      date: "February 28, 2024",
      category: "AI & Technology",
      image: "/src/assets/blog_4.png",
      readTime: "6 min read",
      link: "https://marketpro.ai/blog/the-impact-of-artificial-intelligence-on-web-design-and-development/#:~:text=AI%20integration%20has%20emerged%20as%20a%20transformative%20force,be%20an%20indispensable%20ally%20in%20achieving%20these%20goals.",
    },
    {
      title: "Creating Engaging User Experiences Through Animation",
      description:
        "Discover how to use animations effectively to create more engaging and interactive web experiences that delight users.",
      date: "February 25, 2024",
      category: "UI/UX Design",
      image: "/src/assets/blog_5.jpg",
      readTime: "5 min read",
      link: "https://moldstud.com/articles/p-creating-engaging-user-experiences-with-animations#:~:text=Some%20common%20examples%20include%3A%201%20Button%20animations%3A%20Adding,a%20seamless%20user%20experience%20and%20keep%20users%20engaged.",
    },
    {
      title: "The Complete Guide to Modern Frontend Architecture",
      description:
        "A deep dive into modern frontend architecture patterns and how to implement them in your next project.",
      date: "February 20, 2024",
      category: "Frontend Development",
      image: "/src/assets/blog_6.png",
      readTime: "8 min read",
      link: "https://blog.logrocket.com/guide-modern-frontend-architecture-patterns/",
    },
  ];

  const handleReadMore = (link: string) => {
    // If it's an external link, open in new tab
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      // For internal links, use navigate
      navigate(link);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleBox}>
          OUR LATEST
          <div className={styles.blackCircle} />
        </div>
        <div className={styles.blackCircle} />
        <div className={styles.redCircle} />
        <div className={styles.titleBox}>
          <div className={styles.redCircle} />
          BLOGS
        </div>
      </div>

      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.blogCard}>
            <div className={styles.blogImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.blogContent}>
              <div className={styles.blogMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogDescription}>{post.description}</p>
              <div className={styles.blogFooter}>
                <span className={styles.readTime}>{post.readTime}</span>
                <button
                  className={styles.readMoreButton}
                  onClick={() => handleReadMore(post.link)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
