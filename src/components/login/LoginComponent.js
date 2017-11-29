import React from "react";
import {Link} from "react-router-dom";

export const LoginComponent = (props) => {
    return (
        <div>
            <p>
                En constructor
            </p>
            <Link to="/signup">
              registro
            </Link>
        </div>
    );
};