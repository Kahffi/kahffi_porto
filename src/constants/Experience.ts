import amarthaImg from "../assets/images/companies/amartha-logo.webp"
import ferbosImg from "../assets/images/companies/ferbos-logo.ico";
import smartImg from "../assets/images/companies/smart-logo.png"

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
    id: "exp-3",
    companyName: "SMART Tbk",
    role: "Digital App Developer Intern",
    summary:
      "Migrated a super app frontend to a multi-repo architecture, slashing page load times by ~80% and streamlining developer workflows.",
    companyLink: "https://www.smart-tbk.com/",
    companyImage: smartImg,
    type: ExperienceType.internship,
    location: "Jakarta, Indonesia",
    startDate: "2025-11-01",
    // endDate: "2026-03-25",
    currentlyWorkHere: true,
  },
  {
    id: "exp-2",
    companyName: "Ferbos Kreasi Digital",
    role: "IT Solution Intern",
    summary:
      "Translated Figma designs into responsive interfaces and built custom UI components within Odoo and Developed Odoo modules based on client requirements.",
    companyLink: "https://ferbos.co.id/",
    companyImage: ferbosImg,
    type: ExperienceType.internship,
    location: "Jakarta, Indonesia",
    startDate: "2025-09-01",
    endDate: "2025-11-01",
    currentlyWorkHere: false,
  },
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
