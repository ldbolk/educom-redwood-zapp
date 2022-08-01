import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KlantForm from '../KlantForm/KlantForm'

export const QUERY = gql`
  query EditUserById($id: Int!) {
    user(id: $id) {
      id
      naam
      email
      adres
      postcode
      woonplaats
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      naam
      email
      adres
      postcode
      woonplaats
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User updated')
      navigate(routes.klanten())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit User {user.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <KlantForm
          user={user}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
