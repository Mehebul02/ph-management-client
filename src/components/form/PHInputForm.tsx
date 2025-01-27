import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PHInputForm = ({ type, name, label, placeholder }) => {

    return <div>  {label && (
        <label htmlFor={name} className="block text-gray-700">
            {label}
        </label>
    )}
        <Controller name={name} render={({ field }) => (
            <Input {...field}
                type={type}
                id={name}
                className="block w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={placeholder}
            />
        )} />
    </div>
};

export default PHInputForm;