import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";

const PhSelectForm = ({label, name}) => {
    
    return (
            <Controller
            name={name}
            render={({field})=>(
                <Form.Item label={label}>
                <Select
                  defaultValue="Autumn"
                  style={{ width: 120 }}
                  {...field}
                  options={[
                      { value: 'Autumn', label: 'Autumn' },
                      { value: 'Summer', label: 'Summer' },
                      { value: 'Fall', label: 'Fall' },
                      
                  ]}
              />
            </Form.Item>
            )}
            />

           
        
    );
};

export default PhSelectForm;