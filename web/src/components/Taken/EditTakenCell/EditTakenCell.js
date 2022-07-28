import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TakenForm from 'src/components/Taken/TakenForm'

export const QUERY = gql`
  query EditTakenById($id: Int!) {
    taken: taken(id: $id) {
      id
      taak
      extra
    }
  }
`
const UPDATE_TAKEN_MUTATION = gql`
  mutation UpdateTakenMutation($id: Int!, $input: UpdateTakenInput!) {
    updateTaken(id: $id, input: $input) {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taken }) => {
  const [updateTaken, { loading, error }] = useMutation(UPDATE_TAKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Taken updated')
      navigate(routes.takens())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTaken({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Taken {taken.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <TakenForm
          taken={taken}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
