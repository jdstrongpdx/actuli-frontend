import React from "react";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";

export const PageLayout: React.FC<{children: React.ReactNode;}> = (props) => {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    );
}