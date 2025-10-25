import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RJCO - Demo",
  description: "Services page",
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