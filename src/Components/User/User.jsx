import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats .jsx"
import { Routes, Route } from "react-router-dom";

const User = () => {
    return <section className="container">
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="postar" element={<UserPhotoPost />} />
            <Route path="estatisticas" element={<UserStats />} />
        </Routes>
    </section>
}

export default User