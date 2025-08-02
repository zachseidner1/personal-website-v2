import { WritingProps } from "@/pages/Writing";
import HumanAchievement from "@/writings/HumanAchievement";
import MyFirstBlogPost from "@/writings/MyFirstBlogPost";
import ReflectingOnMyBuddingCareerInSWE from "@/writings/ReflectingOnMyBuddingCareerInSWE";
import ThePowerOfATodoList from "@/writings/ThePowerOfATodoList";

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

  {
    title: "The Power of a To-do List",
    children: <ThePowerOfATodoList />,
    date: new Date(1753025705000),
  },
  {
    title: "Reflecting on My Budding Career in SWE",
    children: <ReflectingOnMyBuddingCareerInSWE />,
    date: new Date(1754098745000),
  },
];
