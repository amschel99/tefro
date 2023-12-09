import React, { useEffect } from "react";
import "./Success.scss";
import { useHistory } from "react-router-dom";

function Success(props) {
  const history = useHistory();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      history.push("/"); // Redirect to the home route ("/") after 5 seconds
    }, 5000);

    // Clear the timeout when the component is unmounted or on cleanup
    return () => clearTimeout(redirectTimeout);
  }, [history]);

  return (
    <div className="design">
      Success! Message sent
      {/* You can add additional content here if needed */}
    </div>
  );
}

export default Success;
