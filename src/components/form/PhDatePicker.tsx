import { DatePicker, Form } from "antd";
import { Controller} from "react-hook-form";

type TDatePickerForm = {
   
    name:string;
    label?:string;
    
}

const PHDatePicker = ({  name, label, }:TDatePickerForm) => {
    
    return <div style={{ marginBottom: '20px' }}>  
        {/* <label htmlFor={name} className="block text-gray-700"> {label}</label> )} */}
        <Controller name={name} render={({ field }) => (
            <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{width:'100%'}}/>
            </Form.Item>
        )} />
    </div>
};

export default PHDatePicker;