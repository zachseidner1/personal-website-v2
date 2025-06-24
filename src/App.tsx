import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import RootLayout from "./components/RootLayout";
import { writingsList } from "./data/writingsList";
import { titleCaseToDashCase } from "./functions/titleCaseToDashCase";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
import Writing from "./pages/Writing";
import WritingsPage from "./pages/WritingsPage";
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
      { index: true, element: <Navigate to="/about" /> },
      { path: "professional", element: <ProjectsPage /> },
      {
        path: "writings",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <WritingsPage writingsList={writingsList} />,
          },
          ...writingsList.map((writingProps) => {
            return {
              path: titleCaseToDashCase(writingProps.title),
              element: <Writing {...writingProps} />,
            };
          }),
        ],
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
