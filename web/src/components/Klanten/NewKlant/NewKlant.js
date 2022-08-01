import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KlantForm from '../KlantForm/KlantForm'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateTakenInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const NewKlant = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User created')
      navigate(routes.klanten())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Nieuwe Klant</h2>
      </header>

      <div className="rw-segment-main">
        <KlantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewKlant
