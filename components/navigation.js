import { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { IoStatsChart } from "react-icons/io5";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return <header className="container max-w-2xl px-6 py-6 mx-auto">

    <div className="flex items-center justify-between">

      {/* User Information */}
      {user && !loading && (
        <div className="flex items-center gap-2">

          {/* image */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.photoURL}
              alt={user.displayName}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* text */}
          <small>Hi, {user.displayName}!</small>

        </div>
      )}

      {/* Right side of the header */}
      {user && !loading && (
        <nav className="flex items-center gap-4">
          <div>
            <a href="#stats">
            <IoStatsChart className="text-2xl" />
            </a>
          </div>
          <div>
            <button onClick={ logout } className="btn btn-red">
              sign out
            </button>
          </div>
        </nav>
      )}

    </div>

  </header>;
}

export default Nav;