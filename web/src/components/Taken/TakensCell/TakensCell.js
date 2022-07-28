import { Link, routes } from '@redwoodjs/router'

import Takens from 'src/components/Taken/Takens'

export const QUERY = gql`
  query FindTakens {
    takens {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No takens yet. '}

      <Link to={routes.newTaken()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ takens }) => {
  return <Takens takens={takens} />
}
