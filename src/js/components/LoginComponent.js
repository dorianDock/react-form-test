import React from 'react'
import { Form, Text, Select, Textarea, NestedForm, FormError } from 'react-form'


// To create a form, just follow the react-form protocol:
// Form(defaultPropsAndLifecycleMethods)(component)

// To create a new form, simply call `Form(config)(component)`

const MyForm = Form({
  // Let's give the form some hard-coded default values
  defaultValues: {
    name: 'Bob'
  },

  // Validating your form is super easy, just use the `validate` life-cycle method
  validate: values => {
    const { name, bio, status, address } = values
    return {
      name: !name ? 'A name is required' : undefined,
      bio: (bio && bio.length < 5 && bio.length > 500) ?
      'Your bio must be between 5 characters and 500 characters long' : false,
    }
  },

  // `onValidationFail` is another handy form life-cycle method
  onValidationFail () {
    // Do something
  }

})(({ values, submitForm, addValue, removeValue, getError }) => {
  // This is a stateless component, but you can use any valid react component to render your form.
  // Forms also supply plenty of useful props for your components to utilize. See the docs for a complete list.
  return (
    // When the form is submitted, call the `sumbitForm` callback prop
    <form className='myForm' onSubmit={submitForm}>

      <label className='form-group'>
        <span>Full Name</span>
        <Text
          className='form-control'
          field='name'
          placeholder='Your name'
        />
      </label>

      <br />

      <label className='form-group'>
        <span>Short Bio</span>
        <Textarea
          className='form-control'
          field='bio'
          placeholder='Short Bio'
        />
      </label>

      <label>
        <span>Address</span>
      </label>

      <NestedForm
        className='form-control'
        form={AddressForm} // The form is built with the Form function
        field='address'
      />

      <button>
        Submit
      </button>

    </form>
  )
})

// This is our reusable address form
const AddressForm = Form({
  // It can have its own validation function!
  validate: values => {
    return {
      street: !values.street ? 'A street is required' : undefined,
      city: !values.city ? 'A city is required' : undefined,
      state: !values.state ? 'A state is required' : undefined
    }
  }
})(() => {
  return (
    <div>
      <Text
        field='street'
        placeholder='Street'
      />
      <Text
        field='city'
        placeholder='City'
      />
      <Text
        field='state'
        placeholder='State'
      />
    </div>
  )
})

export default () => {
  return (
    <div>
      <div className='table-wrap'>
        <MyForm
          onSubmit={(values) => {
            window.alert(JSON.stringify(values, null, 2))
          }}
          // For more available props, see the docs!
        />
      </div>
    </div>
  )
}
