import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats .jsx"
import NotFound from "../NotFound.jsx"
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";

const User = () => {
    const {data} = React.useContext(UserContext)

    return <section className="container">
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed user={data.id} />} />
            <Route path="postar" element={<UserPhotoPost />} />
            <Route path="estatisticas" element={<UserStats />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </section>
}

export default User