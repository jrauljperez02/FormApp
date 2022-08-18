import React, {useState} from 'react'
import styled from 'styled-components'


const FormInput = (props) => {

  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <FormInputStyle>
        <label>{label}</label>
        <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </FormInputStyle>
  )
}

export default FormInput

const FormInputStyle = styled.div`

  display: flex;
  flex-direction: column;
  width: 380px;

    input{
        max-width: 100%;
        padding: 15px;
        margin: 10px;
        margin-left: 0px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    @media (max-width: 768px) {
      input {
        max-width: 50%;
      }
    }

  label{
    font-size: 12px;
    color: #gray;
  }

  span{
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }

  input:invalid[focused="true"]{
    border: 1px solid red;
  }

  input:invalid[focused="true"] ~ span{
    display: block;
}
`