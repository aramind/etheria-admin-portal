import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashBoardPage from "./pages/DashBoardPage";
import AddQuestionPage from "./pages/AddQuestionPage";
import AddCoursePage from "./pages/AddCoursePage";
import ManageQuestionPage from "./pages/ManageQuestionPage";
import ManageUserPage from "./pages/ManageUserPage";
import ManageCoursePage from "./pages/ManageCoursePage";
import MainLayout from "./layout/MainLayout";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardPage />,
      },
      {
        path: "/add-question",
        element: <AddQuestionPage />,
      },
      {
        path: "/add-course",
        element: <AddCoursePage />,
      },
      {
        path: "/manage-question",
        element: <ManageQuestionPage />,
      },
      {
        path: "/manage-course",
        element: <ManageCoursePage />,
      },
      {
        path: "/manage-user",
        element: <ManageUserPage />,
      },
    ],
  },
]);

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

const router = { publicRouter, privateRouter };

export default router;
