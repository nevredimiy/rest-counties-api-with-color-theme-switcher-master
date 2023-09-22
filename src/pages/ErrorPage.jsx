import { useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";
import GoBackBtn from "../components/GoBackBtn";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <div id="error-page" className="container">
          <Header />
          <GoBackBtn />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}