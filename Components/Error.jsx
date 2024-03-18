import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="container7">
      <h1>This is my Error Page</h1>
      <div className="errorDetails">
      <h2>Error: {err.data}</h2>
      <h2>Status: {err.status}</h2>
      <h2>StatusText: {err.statusText}</h2>
      </div>
    </div>
  );
};

export default Error;
