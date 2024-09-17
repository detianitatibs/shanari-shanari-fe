import BlogPost from "@/components/organisms/blog-post/BlogPost";
import BlogPostProps from "@/types/BlogPostProps";

const Blog = ({ ...props }: BlogPostProps) => {
  return <BlogPost {...props}></BlogPost>;
};

export default Blog;
