import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Terence James",
    paragraph:
      "Oversees the daily operations of the branch, ensuring exceptional client service, managing staff performance, and driving business growth while maintaining compliance with accounting standards.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/about/bj.png",
      designation: "Branch Manager",
    },
    tags: ["See more"],
    publishDate: "2025",
    jobTitle: "Branch Manager",
    yearsExperience: 10,
  },
  {
    id: 2,
    title: "Alymega Mandima",
    paragraph:
      "Leads the SME division, providing tailored financial solutions, managing client relationships, and guiding teams to deliver accurate and strategic accounting services for growing businesses.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
    jobTitle: "Manager - SME",
    yearsExperience: 5,
  },
  {
    id: 3,
    title: "Bronwen James",
    paragraph:
      "Oversees the bookkeeping team, ensuring extremely accurate and always timely financial records, streamlining processes, and supporting clients with reliable day-to-day accounting solutions.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
    jobTitle: "Manager - Bookkeeping",
    yearsExperience: 3,
  },
  {
    id: 4,
    title: "Gugu Mshengu",
    paragraph:
      "Manages bookkeeping and statutory compliance, including UIF and WCA submissions, ensuring accurate records and adherence to all regulatory requirements.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
    jobTitle: "Bookkeeping - UIF - WCA",
    yearsExperience: 3,
  },
  {
    id: 5,
    title: "Nokukhanye Zulu",
    paragraph:
      "Provides accurate bookkeeping and financial support tailored to small and medium enterprises, helping clients maintain clear records and make informed business decisions.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
    jobTitle: "Bookkeeping - SME",
    yearsExperience: 2,
  },
];
export default blogData;
