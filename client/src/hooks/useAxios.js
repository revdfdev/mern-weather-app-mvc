import { useState, useEffect, useRef } from 'react';
import {  useNavigate  } from 'react-router-dom';
import AxiosInstance  from '../utils/AxiosInstance';

export function usePost(path, payload) {
    const isCurrent = useRef(true);
    const navigate = useNavigate();
    const [state, setState] = useState({
        data: null,
        status: 0,
        loading: true
    });

    useEffect(function () {
        return function() {
            isCurrent.current = false;
        }
    }, []);

    useEffect(async function () {
        setState(state => ({
            ...state,
            loading: true
        }));

        const axiosInstance = new AxiosInstance(navigate)
        await axiosInstance.post(path, payload,
        (status, data) => {
            setState(state => ({
                ...state,
                status,
                data,
                loading: false
            }));
        }, error => {
            setState(state => ({
                ...state,
                loading: false
            }));
            axiosInstance.handleError(error);
        });
    }, [path, setState, history])

    return state
}

export function useGet(path, query) {
    const isCurrent = useRef(true);
    const navigate = useNavigate();
    const [state, setState] = useState({
        data: null,
        status: 0,
        loading: true
    });

    useEffect(function () {
        return function () {
            isCurrent.current = false;
        }
    }, []);

    useEffect(async function () {
        setState(state => ({
            ...state,
            loading: true
        }));

        const axiosInstance = new AxiosInstance(history)
        await axiosInstance.get(path, query,
            (status, data) => {
                setState(state => ({
                    ...state,
                    status,
                    data,
                    loading: false
                }));
            }, error => {
                setState(state => ({
                    ...state,
                    loading: false
                }));
                axiosInstance.handleError(error);
            });
    }, [path, setState, history])

    return state
}


export function usePatch(path, payload) {
    const isCurrent = useRef(true);
    const navigate = useNavigate();
    const [state, setState] = useState({
        data: null,
        status: 000,
        loading: true
    });

    useEffect(function () {
        return function () {
            isCurrent.current = false;
        }
    }, []);

    useEffect(async function () {
        setState(state => ({
            ...state,
            loading: true
        }));

        const axiosInstance = new AxiosInstance(history)
        await axiosInstance.patch(path, payload,
            (status, data) => {
                setState(state => ({
                    ...state,
                    status,
                    data,
                    loading: false
                }));
            }, error => {
                setState(state => ({
                    ...state,
                    loading: false
                }));
                axiosInstance.handleError(error);
            });
    }, [path, setState, history])

    return state
}