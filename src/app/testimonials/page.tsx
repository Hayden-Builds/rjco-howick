import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const TestimonialsPage = () => {
  return (
    <>
        <Breadcrumb
          pageName="Client Testimonials"
          description="What our users say"
        />
      <Testimonials padBottomOnly showSvgBackground />
    </>
  );
};

export default TestimonialsPage;