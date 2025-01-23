import React from "react";
import {Routes, Route} from "react-router-dom";
import AuctionListing from '../../features/auction/AuctionListing';

const AuctionRouter = () => {
    return (
        <Routes>
            <Route index element={< AuctionListing />}/>
            <Route path="/create"/>
            <Route path="view/:id" />
            <Route path="delete/:id" />
        </Routes>
    );
};

export default AuctionRouter;