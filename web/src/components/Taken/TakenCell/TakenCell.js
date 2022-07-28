import Taken from 'src/components/Taken/Taken'

export const QUERY = gql`
  query FindTakenById($id: Int!) {
    taken: taken(id: $id) {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Taken not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taken }) => {
  return <Taken taken={taken} />
}
