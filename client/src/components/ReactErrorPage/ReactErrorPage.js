import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BulbError from '../BulbError';


export function ReactErrorPage (props) {

    const location = useLocation();

    const { error, errorCode } = location.state;

    console.log("Props", location);

    return (
        <div className="error-template">
            <BulbError error={error} errorCode={errorCode} />
            <div className="error-details">
                {error}
            </div>
            <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                    <span className="glyphicon glyphicon-home">
                    </span>
                    Take me home
                </Link>
            </div>
        </div>
    )
}