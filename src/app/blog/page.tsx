import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RJCO - Demo",
  description: "Team page",
};

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Meet the team"
        description="We’d love to hear from you! Whether you have questions, feedback, or need support, our team is here to help. Reach out to us and we’ll get back to you as soon as possible."
      />

      <Blog padBottomOnly />
    </>
  );
};

export default BlogPage;