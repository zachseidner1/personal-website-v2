import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import MyFirstBlogPost from "./writings/MyFirstBlogPost";

const router = createBrowserRouter([
  { path: "/", element: <div>Hello world</div> },
  { path: "/first-blog-post", element: <MyFirstBlogPost /> },
]);
export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}
