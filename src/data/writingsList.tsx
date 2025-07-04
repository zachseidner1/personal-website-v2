import { WritingProps } from "@/pages/Writing";
import HumanAchievement from "@/writings/HumanAchievement";
import MyFirstBlogPost from "@/writings/MyFirstBlogPost";

export const writingsList: WritingProps[] = [
  {
    title: "My First Blog Post",
    children: <MyFirstBlogPost />,
    date: new Date(1750733147252),
  },
  {
    title: "Human Achievement",
    children: <HumanAchievement />,
    date: new Date(1751635869000),
  },
];
