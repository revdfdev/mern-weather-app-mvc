import React from 'react';
import MainContainer from '../MainContainer';
import { Provider } from 'react-redux';
import createStore from '../../store';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home/';
import ReactErrorPage from '../ReactErrorPage';

const store = createStore();

export function Root () {
    return (
            <Provider store={store}>
                <MainContainer>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/400">
                                <ReactErrorPage errorCode={400} error={ { message: "Request body not proper" } }/>
                            </Route>
                            <Route path="/404">
                                <ReactErrorPage errorCode={404} error={{ messgae: "Page not found" }} />
                            </Route>
                            <Route path="/500">
                                <ReactErrorPage errorCode={500} error={{ message: "Server failure" }} />
                            </Route>
                            <Route path="*" element={
                                <Navigate to="/404" replace />
                            }/>
                        </Routes>
                    </Router>
                </MainContainer>
            </Provider>
    )
}