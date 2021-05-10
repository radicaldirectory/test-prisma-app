import "@styles/global.css";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;

//TODO #1 move inline Styled JSX into CSS modules
