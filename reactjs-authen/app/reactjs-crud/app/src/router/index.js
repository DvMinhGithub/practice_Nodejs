import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import * as pages from '../page'

export default function Authen() {
    return (
        <div>
            <Router>
                <Routes >
                    <Route index path="/" element={<pages.StudentPage />} />
                </Routes >
            </Router>
        </div>
    );
}
