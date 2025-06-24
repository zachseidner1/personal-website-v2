import { WritingProps } from "@/pages/Writing";
import MyFirstBlogPost from "@/writings/MyFirstBlogPost";

export const writingsList: WritingProps[] = [
  {
    title: "My First Blog Post",
    children: <MyFirstBlogPost />,
    date: new Date(1750733147252),
  },
];
