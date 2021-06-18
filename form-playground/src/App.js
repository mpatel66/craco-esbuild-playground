import React from 'react'
import { ThemeProvider } from 'styled-components';
// NOTE the macro version doesn't seem to work - get import error
// TODO - figure out why and fix it. 
// import { ThemeProvider } from 'styled-components/macro';
import { theme as fluidlyTheme, InputLabel, selectColorByUse, BodyRegular } from '@fluidly/ui-components';
import './App.css';
import { Form, Field } from 'react-final-form';
import {FORM_ERROR} from 'final-form'

const CustomInput = ({name, label}) => {
  const required = (value) => value ? "" : "Required"
  return (
    <>
      <Field name={name} placeholder={name} validate={required}>
        {({input, meta}) => (
          <div className="input-field">
            <label className="input-label">{label}</label>
            <input {...input} type="text" placeholder={name} className="input-actual"/>
            <InputLabel >I ain't gettin' on no plane fool!</InputLabel> 
            <BodyRegular color={selectColorByUse('future')}>Hello WORLD!</BodyRegular>

            {(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}
          </div>
        )}
      </Field>
    </>
  )
}

function App() {

  const onSubmit = (formValues) => {
    console.log('form submitted', formValues.Email)
    if (formValues.Email !== "meera.patel@fluidly.com") {
      return { [FORM_ERROR]: 'Invalid Email' }
    }
    if (formValues.Password !== "meerapatel") {
      return { [FORM_ERROR]: 'Incorrect login details' }
    }
  }
  
  return (
    <ThemeProvider theme={{ ...fluidlyTheme }}>

      <h1>
        Hello! Welcome to the React Final Form Playground
      </h1>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, submitError}) => (
          // handle submit is passed the event, which includes the form, the input and the button objects
          <form onSubmit={handleSubmit}>
            <div>
            <CustomInput name="Email" label={"Email"}/>
            <CustomInput name="Password" label={"Password"} />
            </div>
            <button type="submit">Submit Form</button>
            {submitError && <div className="error">{submitError}</div>}
          </form>
          )
        }
      />
    </ThemeProvider>
  );
}

export default App;

