import React from "react";

const Year = new Date().getFullYear();
const Header = () => {
    return (
        <>
            <header className="text-center text-secondary p-2 fixed-top font-weight-bolder text-capitalize mx-1 margon ">
                <h2 className="font-weight-bolder">🌦️ WeatherApp</h2>
            </header>
        </>
    )
}
export default Header;