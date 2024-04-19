import { FormEvent } from "react";
import "./Login.page.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      return;
    }

    localStorage.setItem("email", e.currentTarget.email.value);
    localStorage.setItem("password", e.currentTarget.password.value);

    navigate("/");
  };

  return (
    <div id="login-page">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Choose a random email"
        />
        <input
          type="password"
          name="password"
          required
          minLength={5}
          placeholder="Choose a random password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
