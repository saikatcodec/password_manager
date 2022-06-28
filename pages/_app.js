import Theme from "../components/Theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}

export default MyApp;
