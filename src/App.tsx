import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
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
      { path: "", element: <Navigate to="/about" /> },
      { path: "professional", element: <ProjectsPage /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
