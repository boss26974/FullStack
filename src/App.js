import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import HomePage from "./components/homePage";
import TagCategory from "./components/tagCategory"
import Author from './components/author';
import FullContent from './components/fullContentPage'
import AddComment from './components/addComment'
import NavigationBar from "./components/navBar"
import "./style/app.css"

const app = () => {
    return(
        <BrowserRouter>
            <div id="root">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} exact/>
                    <Route path="/tag-category" element={<TagCategory />}/>
                    <Route path="/author" element={<Author />}/>
                    <Route path="/full-content" element={<FullContent />}/>
                    <Route path="/addComment" element={<AddComment />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default app
