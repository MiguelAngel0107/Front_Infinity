import { Link, useLocation } from "react-router-dom";

export default function SubMenu2() {
  const location = useLocation();
  let path = location.pathname;
  const select = "-mb-px border-b border-current p-4 text-pink-600"
  const normal = "-mb-px border-b border-transparent p-4 dark:text-white hover:text-pink-600"
  
  return (
    <nav class="flex border-b border-gray-100 text-sm font-medium">
      <Link
        to="/dashboard/one"
        class={
            "/dashboard/one" == path ? select : normal
          }
      >
        Bronze
      </Link>

      <Link
        to="/dashboard/two"
        class={
            "/dashboard/two" == path ? select : normal
          }
      >
        Silver
      </Link>

      <Link
        to="/dashboard/three"
        class={
            "/dashboard/three" == path ? select : normal
          }
      >
        Gold
      </Link>

      <Link
        to="/dashboard/four"
        class={
            "/dashboard/four" == path ? select : normal
          }
      >
        Platinum
      </Link>
    </nav>
  );
}
