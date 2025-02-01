import { Form, Input } from "antd";
import { Controller} from "react-hook-form";

type TInputForm = {
    type:string;
    name:string;
    label?:string;
    placeholder?:string;
}

const PHInputForm = ({ type, name, label, placeholder }:TInputForm) => {
    
    return <div style={{ marginBottom: '20px' }}>  
        {/* <label htmlFor={name} className="block text-gray-700"> {label}</label> )} */}
        <Controller name={name} render={({ field }) => (
            <Form.Item label={label}>
            <Input {...field}
                type={type}
                id={name}
                 size="large"
                className="block w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={placeholder}
            />
            </Form.Item>
        )} />
    </div>
};

export default PHInputForm;