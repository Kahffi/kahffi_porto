import profilePict from "../assets/images/profile-pict.webp"

export type IntroContent = {
  header: string;
  subHeader: string;
  image: string;
};

export const INTRO: IntroContent = {
    header: "Muhammad Daffa Al Kahffi",
    subHeader: "Undergraduate Mechatronics and Artificial Intelligence student at Universitas Pendidikan Indonesia, ex Backend Engineering Intern @ Amartha",
    image: profilePict
}

