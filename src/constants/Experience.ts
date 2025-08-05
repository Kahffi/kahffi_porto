import amarthaImg from "../assets/images/companies/amartha-logo.webp"

export enum ExperienceType {
  internship = "internship",
  fullTime = "full-time",
  partTime = "part-time",
}

export type Experience = {
  id: string;
  companyName: string;
  role: string;
  summary: string;
  companyLink: string;
  companyImage: string;
  type: ExperienceType;
  location: string;
  startDate: string; // ISO string only
  endDate?: string; // ISO string only
  currentlyWorkHere: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    companyName: "Amartha Financial",
    role: "Backend Developer Intern",
    summary:
      "Developed and maintained internal backend services using Go, Apache Kafka, REST APIs, and PostgreSQL.",
    companyLink: "https://amartha.com",
    companyImage: amarthaImg,
    type: ExperienceType.internship,
    location: "Jakarta, Indonesia",
    startDate: "2025-02-18",
    endDate: "2025-05-25",
    currentlyWorkHere: false,
  },
];
