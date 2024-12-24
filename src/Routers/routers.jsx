import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Error404Page from "../pages/error404Page";
import HomePage from "../pages/home";
import DashboardPage from "../pages/dashboardPage";
import DashboardError404Page from "../pages/dashboardError404Page";
import RegisterPage from "../pages/register";
import WorkSheetPage from "../pages/workSheet";
import PaymentHistoryPage from "../pages/paymentHistoryPage";
import TaskAddPage from "../pages/taskAddPage";
import AllTaskPage from "../pages/allTaskPage";
import UsersPage from "../pages/usersPage";
import AdminUsersPage from "../pages/adminUsersPage";
import WorkProgressPage from "../pages/workProgressPage";
import WorkCheckedPage from "../pages/workCheckedPage";
import PaidAddPage from "../pages/paidAddPage";
import {
  getAllTask,
  getAllUser,
  getUser,
  getWorkSheet,
} from "../utils/apiAction";
import { LoginPage } from "../pages/login";
import AdminUserPage from "../pages/adminUserPage";
import PaidComplete from "../pages/paidComplete";
import PrivateAccess from "./PrivateAccess";
import ContactPage from "../pages/contactPage";
import DashboardIndexPage from "../pages/dashboardIndexPage";
import InvoicesPage from "../pages/invoicesPage";
import InvoicePage from "../pages/invoicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/invoices", element: <InvoicesPage /> },
      { path: "/invoices/:id", element: <InvoicePage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/administrator",
        element: (
          <PrivateAccess>
            <DashboardPage />
          </PrivateAccess>
        ),
        errorElement: <DashboardError404Page />,
        children: [
          {
            path: "/administrator/",
            element: <DashboardIndexPage />,
          },
          {
            path: "/administrator/work-sheet",
            element: <WorkSheetPage />,
          },
          {
            path: "/administrator/progress",
            element: <WorkProgressPage />,
          },
          {
            path: "/administrator/work-sheets",
            element: <WorkCheckedPage />,
          },

          {
            path: "/administrator/payment-history",
            element: <PaymentHistoryPage />,
          },
          {
            path: "/administrator/payments/:id",
            element: <PaidAddPage />,
          },
          {
            path: "/administrator/payment-add",
            element: <PaidAddPage />,
          },
          {
            path: "/administrator/tasks-add",
            element: <TaskAddPage />,
          },
          {
            path: "/administrator/tasks",
            element: <AllTaskPage />,
          },

          {
            path: "/administrator/employee-list",
            element: <UsersPage />,
          },

          {
            path: "/administrator/employee-list/details/:id",
            element: <AdminUserPage />,
          },

          {
            path: "/administrator/all-employee-list",
            element: <AdminUsersPage />,
          },

          {
            path: `/administrator/payments/paid-complete`,
            element: <PaidComplete />,
          },
        ],
      },

      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
