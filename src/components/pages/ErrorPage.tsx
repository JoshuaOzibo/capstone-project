import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className="text-white">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <br />
        <Link to="/">Go Back Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
