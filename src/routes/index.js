// Authentication related pages
import Landing from "pages/Landing";

// Dashboard
import AboutUs from "pages/AboutUs";
import Partners from "pages/Partners";


const authProtectedRoutes = [
  { path: "/about", component: AboutUs },
  { path: "/partners", component: Partners },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  // { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "", component: AboutUs },
];

const publicRoutes = [
  { path: "/", component: Landing },
];

export { authProtectedRoutes, publicRoutes };
