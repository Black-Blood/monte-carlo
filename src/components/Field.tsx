import React, { useId } from 'react'

interface IInputField extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string
}

interface ISelectField extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    labelText: string
    type?: 'select'
}

type IField = IInputField | ISelectField;

export default function Field(props: IField) {
    const id = useId()

    const { type, labelText, ...other } = props

    return (
        <div className='field'>
            {
                type === 'select' && <select
                    className='field__input'
                    {...other as ISelectField}
                    id={other.id ?? id}>
                    {other.children}
                </select>
            }
            {
                type !== 'select' && <input
                    className='field__input'
                    placeholder={labelText}
                    {...other as IInputField}
                    id={other.id ?? id}
                />
            }

            <label className='field__name' htmlFor={other.id ?? id}>{labelText}</label>
        </div >
    )
}