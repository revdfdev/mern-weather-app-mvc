import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default class AxiosInstance {
    constructor(history) {
        const instance = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}`,
            timeout: 20000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        instance.interceptors.use(this.handleSuccess, this.handleError);
        this.instance = instance;
        this.history = history;
    }

    handleError(error) {
        switch(error.response.status) {
            case 401:
                this.history.push({
                    pathname: '/401',
                    state: {
                        error
                    }
                })
                break;
            case 501:
                this.history({
                    pathname: '/501',
                    state: {
                        error
                    }
                });
                break;
            case 404:
                this.history({
                    pathname: '/404',
                    state: {
                        error: 'No content found'
                    }
                });
                break;
            default:
                this.history({
                    pathname: '/unknow-error',
                    state: {
                        error: error
                    }
                });
        }
    }

    handleSuccess(response) {
        return response;
    }

    async get(path, query, callback, errorCallback) {
        try {
            const response = await this.instance.get(path, {
                params: {
                    ...query
                }
            });
            callback(response.status, response.data);
        } catch (error) {
            errorCallback(error);
        }
    }

    async patch(path, patchtData, callback, errorCallback) {
        try {
            const response = await this.instance.patch(path, patchtData);
            callback(response.status, response.data);
        } catch (error) {
            errorCallback(error);
        }
    }

    async post(path, payload, callback, errorCallback) {
        try {
            const response = await this.instance.post(path, payload);
            callback(response.status, response.data);
        } catch (error) {
            errorCallback(error);
        }
    }
}
