import Advertisement from "@/components/pages/backend/advertisement/Advertisement";
import Category from "@/components/pages/backend/category/Category";
import Dashboard from "@/components/pages/backend/dashboard/Dashboard";
import Foods from "@/components/pages/backend/foods/Foods";
import Role from "@/components/pages/backend/settings/role/Role";
import Settings from "@/components/pages/backend/settings/Settings";
import User from "@/components/pages/backend/settings/user/User";

export const routeDeveloper = [
  {
    route: `/developer/dashboard`,
    element: <Dashboard />,
  },
  {
    route: `/developer/category`,
    element: <Category />,
  },
  {
    route: `/developer/advertisement`,
    element: <Advertisement />,
  },
  {
    route: `/developer/foods`,
    element: <Foods />,
  },
  {
    route: `/developer/settings`,
    element: <Settings />,
  },
  {
    route: `/developer/role`,
    element: <Role />,
  },
  {
    route: `/developer/users`,
    element: <User />,
  },
  {
    route: `/developer/developer`,
    element: <Role />,
  },
];
