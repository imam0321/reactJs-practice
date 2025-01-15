import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";
import Contact from "./Contact";
import { getContactLoader, getContactsLoader } from "./loaders/ContactsLoader";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavoriteAction,
} from "./actions/ContactsAction";
import EditContact from "./EditContact";
import Index from "./Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavoriteAction,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>Oops! There is an error</div>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
