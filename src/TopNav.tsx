import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { appStore } from "./stores/app.store";
import { useStoreProperty } from "@skyblazar/react-store";

export const TopNav: React.FC = () => {
  const [user, setUser] = useStoreProperty(
    appStore,
    (state) => state.user,
    "user"
  );

  return (
    <div id="top-nav">
      <h3>Todos Test</h3>

      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              if (!user) {
                alert("Please login first");
              }
            }}
          >
            Home
          </Link>
        </li>
        {user && (
          <li>
            <Link
              to="/login"
              onClick={(e) => {
                e.preventDefault();
                if (confirm("Are you sure you want to logout?")) {
                  setUser(undefined);
                }
              }}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
