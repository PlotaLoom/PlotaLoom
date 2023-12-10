import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = "216163516529820798950096626185565726103604035584";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState<boolean>(false);

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