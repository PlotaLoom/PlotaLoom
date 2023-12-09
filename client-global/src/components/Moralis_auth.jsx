import React, { useEffect, useState } from "react";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = 216163516529820798950096626185565726103604035584;

const Moralis_auth = ({ Component, pageProps }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <AnonAadhaarProvider _appId={app_id}>
          <Component {...pageProps} />
        </AnonAadhaarProvider>
      ) : null}
    </>
  );
}

export default Moralis_auth;

