import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MyFirstBlogPost from "./writings/MyFirstBlogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <NotFound />
      </RootLayout>
    ),
    children: [
      { path: "first-blog-post", element: <MyFirstBlogPost /> },
      { path: "about", element: <About /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
