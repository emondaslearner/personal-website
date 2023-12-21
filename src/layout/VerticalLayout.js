/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

// ** import third party
import { Outlet, useLocation } from "react-router-dom"

// ** import routes meta data
import { Routes as metaData } from "../Router/routes"
import Navbar from "../components/Navbar";

const VerticalLayout = () => {// ** get location
    let location = useLocation() // it's really important for get updated metaData

    // ** States
    const [meta, setMeta] = useState(null)

    const handleSetMeta = () => {
        const { meta } = metaData.filter((item) => {
            if (location.pathname === item.path) {
                return item.meta
            }
        })[0]
        setMeta(meta)
    }

    //** ComponentDidMount
    useEffect(() => {
        handleSetMeta()
    }, [location])

    return (
        <div className="flex w-[100vw] h-[100vh] overflow-hidden justify-between">
            {(meta?.layout !== "blank" || meta?.layout === undefined) && meta && (
                <>
                    {meta?.isNotMenu ? null : <Navbar />}
                    <Outlet />
                </>
            )}
        </div>
    );
};

export default VerticalLayout;