import { WritingProps } from "@/pages/Writing";
import FocusAreasForSeniorYear from "@/writings/FocusAreasForSeniorYear";
import Forgetting from "@/writings/Forgetting";
import HumanAchievement from "@/writings/HumanAchievement";
import IDid1NewThingEverydayForAWeek from "@/writings/IDid1NewThingEverydayForAWeek";
import MyFirstBlogPost from "@/writings/MyFirstBlogPost";
import OnIdeation from "@/writings/OnIdeation";
import ReflectingOnMyBuddingCareerInSWE from "@/writings/ReflectingOnMyBuddingCareerInSWE";
import ThePowerOfATodoList from "@/writings/ThePowerOfATodoList";
import WhyIStoppedBlogging from "@/writings/WhyIStoppedBlogging";

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
  {
    title: "Focus Areas for Senior Year",
    children: <FocusAreasForSeniorYear />,
    date: new Date(1756129309000),
  },
  {
    title: "I Did 1 New Thing Every Day For a Week",
    children: <IDid1NewThingEverydayForAWeek />,
    date: new Date(1758814910000),
  },
  {
    title: "Forgetting",
    children: <Forgetting />,
    date: new Date(1760554132000),
  },
  {
    title: "On Ideation",
    children: <OnIdeation />,
    date: new Date(1762815325000),
  },
  {
    title: "Why I Stopped Blogging (and will only return very infrequently)",
    children: <WhyIStoppedBlogging />,
    date: new Date(1768833959000),
  },
];
