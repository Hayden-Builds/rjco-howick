import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RJCO - Demo",
  description: "About page",
};

const AboutPage = () => {
  return (
    <>
        <Breadcrumb
          pageName="About Us"
          description="In 2008 a branch of Russell James and Company Inc. was established in Howick to provide Bookkeeping, Accounting, Tax, Payroll and Advisory offerings to clients in the KZN Midlands. Our first offices were housed in the Old Howick Falls Hotel until 2016 when we moved into our own premises at 95 Main Street. Through changes brought on by expansion and growth; Russell James and Company changed its name to Baker Tilly JHB Inc. and then to RJCO Howick as it is known now. Although we are now a separate entity to Baker Tilley JHB Inc, we are fortunate to still have the association with them and the wider knowledge pool that we can draw from. BSH was established in 2009 offering bookkeeping services in an around Howick and the KZN Midlands and operated from 122 Main Street in Howick.  In 2019 the business was sold to its current shareholders and has been under the current management since then. In 2020 BSH moved into the RJCO offices.  This was primarily to save on costs and keep our fees down during the COVID pandemic and lockdown, which saw many of our clients struggling to stay afloat. During this time the symbiosis between the two companies became apparent. We therefore have decided to join forces under a singular identity: RJCO Howick. This union not only embodies a perfect synergy but also underscores our commitment to providing excellent services to the Howick community, Midlands and beyond. With our shared values of excellence and dedication to client satisfaction, this collaboration ensures an bigger range of accounting, bookkeeping and other solutions to cater to diverse needs."
        />
    </>
  );
};

export default AboutPage;