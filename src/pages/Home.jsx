import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <Dashboard />
        </>
    );
};

export default Home;
