import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="naam"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Naam
        </Label>

        <TextField
          name="naam"
          defaultValue={props.user?.naam}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="naam" className="rw-field-error" />


        <Label
          name="adres"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adres
        </Label>

        <TextField
          name="adres"
          defaultValue={props.user?.adres}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="adres" className="rw-field-error" />

        <Label
          name="postcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Postcode
        </Label>

        <TextField
          name="postcode"
          defaultValue={props.user?.postcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="postcode" className="rw-field-error" />

        <Label
          name="woonplaats"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Woonplaats
        </Label>

        <TextField
          name="woonplaats"
          defaultValue={props.user?.woonplaats}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="woonplaats" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
