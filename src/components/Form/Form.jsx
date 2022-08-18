import React, {Fragment, useState}  from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';
import fields from '../Utils/Fields.json'
import address_fields from '../Utils/AddressFields.json'
import representativeFields from '../Utils/LegalRepresentative.json' 
import backAccountFields from '../Utils/BankAccountFields.json'


const Form = () => {

    const [showSecondSection, setShowSecondSection] = useState(false);
    const [showThirdSection, setShowThirdSection] = useState(false);
    const [showFourthSection, setShowFourthSection] = useState(false);

    const [values, setValues] = useState(
        {
          razon_social: "",
          nombre_comercial: "",
          nacionalidad: "",
          fecha_de_constitucion: "",
          rfc: "",
          regimen_fiscal: "",
          industria: "",
          nombre_calle: "",
          numero_exterior: "",
          numero_interior: "",
          codigo_postal: "",
          colonia: "",
          ciudad: "",
          estado: "",
          pais: "",
          comprobante_de_domicio: "",
          telefono: "",
          email: "",
          nombre: "",
          genero: "",
          fecha_de_nacimiento: "",
          lugar_de_nacimiento: "",
          pais_de_nacimiento: "",
          nacionalidad_representante: "",
          CURP: "",
          rfc_representante: "",
          domicilio_representante: "",
          estado_civil: "",
          email_representante: "",
          telefono_representante: "",
          identificacion: "",
          CLABE: "",
          banco: "",
        }
      );
    
      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
      const onChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
      }
    
    const companyEntries = (
        <Fragment>
            <h2>Datos de la empresa.</h2>
            {fields.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
        </Fragment>
    );

    const companyAddress = (
        <Fragment>
            <h2>Domicilio.</h2>
            {address_fields.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
        </Fragment>
    )

    const companyLegal = (
        <Fragment>
            <h2>Representante legal.</h2>
            {representativeFields.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
        </Fragment>
    )

    const bank_account = (
        <Fragment>
            <h2>Cuenta bancaria.</h2>
            {backAccountFields.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
        </Fragment>
    )

  console.log(values)

  return (
    <Fragment>
        <FormStyle onSubmit={handleSubmit}>
        <h1>Formulario</h1>

        {companyEntries}
            <button 
                className='display-button'
                onClick={() => setShowSecondSection(!showSecondSection)}>
                  {showSecondSection ? (
                    <React.Fragment>
                      <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      <span>Ocultar sección Domicilio</span>
                    </React.Fragment>
                  ):(
                    <React.Fragment>
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>Domicilio</span>
                    </React.Fragment>
                  )}
                
            </button>
        {showSecondSection && companyAddress}
            <button 
                className='display-button'
                onClick={() => setShowThirdSection(!showThirdSection)}>
                {showThirdSection ? (
                    <React.Fragment>
                      <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      <span>Ocultar sección representante legal.</span>
                    </React.Fragment>
                  ):(
                    <React.Fragment>
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>Representante legal.</span>
                    </React.Fragment>
                  )}
            </button>
        {showThirdSection && companyLegal}
        <button 
                className='display-button'
                onClick={() => setShowFourthSection(!showFourthSection)}>
                {showFourthSection ? (
                    <React.Fragment>
                      <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      <span>Ocultar sección datos bancarios.</span>
                    </React.Fragment>
                  ):(
                    <React.Fragment>
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>Datos bancarios.</span>
                    </React.Fragment>
                  )}
            </button>
        {showFourthSection && bank_account}
        
        <button className='button-submit'>Enviar</button>
      </FormStyle>
    </Fragment>
  )
}

export default Form


const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;


    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 60px;
    border-radius: 5px;

    h1{
      margin-top: 30px;
      color: #5DB8C4;
    }
    h2{
      font-size: 15px;
    }

    .display-button{
        width: 100%;
        height: 50px;
        padding: 10px;
        border: 2px solid #5DB8C4;
        color: black;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 30px;
        margin-top: 10px;
    }

    .button-submit{
      width: 100%;
      height: 50px;
      padding: 10px;
      border: none;
      background-color: #ED6217;
      color: white;
      border-radius: 5px;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      margin-bottom: 30px;
      margin-top: 10px;
    }

    button span{
        padding-left: 5px;
    }


    .button-submit:hover{
      background-color: #AB3F00;
      transition: 0.5s;
    }

`