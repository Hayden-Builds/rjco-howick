import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RJCO - Demo",
  description: "Testimonials page",
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