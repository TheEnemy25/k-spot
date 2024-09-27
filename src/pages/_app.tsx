import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SupportPanel from "../components/navigation-bar/SupportPanel";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
            }}
        >
            <Header />
            <SupportPanel />
            <main className="wrapper">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
