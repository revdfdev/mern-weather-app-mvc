import React from 'react';
import "./BulbError.css";

function renderError(statusCde) {
    switch(statusCde) {
        case 400:
            return(
                <lottie-player src="https://assets7.lottiefiles.com/datafiles/mVuaYzsV6mwoEwK/data.json" background="transparent" style={{
                                height: "300px"}} speed="1" autoplay></lottie-player>
            )
        case 404:
            return(
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_IXf5MX.json" background="transparent" style={{
                                height: "300px"}} speed="1" autoplay></lottie-player>
            )
        case 500:
            return (
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_1e0yPa.json" background="transparent" style={{
                                height: "300px"}} speed="1" autoplay></lottie-player>
            )

        default:
            return (
                <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_Wq9UHU.json" background="transparent" style={{
                                height: "300px"}} speed="1" autoplay></lottie-player>
            )

    }
}

export const BulbError = ({ errorCode, error }) => (
    <div className="d-flex justify-content-center">
            <div className="col-md-12">
                <div className="lottie">
                    {renderError(errorCode)}
                </div>
            </div>
    </div>
)
