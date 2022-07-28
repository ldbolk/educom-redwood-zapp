import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TakenForm from 'src/components/Taken/TakenForm'

const CREATE_TAKEN_MUTATION = gql`
  mutation CreateTakenMutation($input: CreateTakenInput!) {
    createTaken(input: $input) {
      id
    }
  }
`

const NewTaken = () => {
  const [createTaken, { loading, error }] = useMutation(CREATE_TAKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Taken created')
      navigate(routes.takens())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTaken({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Nieuwe Taak</h2>
      </header>

      <div className="rw-segment-main">
        <TakenForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTaken
