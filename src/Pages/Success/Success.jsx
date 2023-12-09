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
    <h2  style={{height:"30vh", marginTop:"30vh", alignSelf:"center", display:"flex", justifyContent:"center"}}className="services__heading">Message Sent!</h2>
  );
}

export default Success;
