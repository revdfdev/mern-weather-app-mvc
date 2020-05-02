import { useState } from 'react';

export function useSearchForm(initialValues) {
    const [values, setValues] = useState({
        ...initialValues
    });
    return [
        values,
        e => {
            const { name, value }  = e.target;
            setValues(prevValues => ({
                ...prevValues,
                [name]: value
            }))
        }
    ]
}