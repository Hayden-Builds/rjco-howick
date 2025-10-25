import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
        <Breadcrumb
          pageName="Our Services"
          description="Heres our offering"
        />
      <Features padBottomOnly showSvgBackground />
    </>
  );
};

export default ServicesPage;