export const QUERY = gql`
  query FindBezoekQuery($id: Int!) {
    bezoek: bezoek(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div>Nog geen bezoeken ingepland</div>
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bezoek }) => {
  return <div>{JSON.stringify(bezoek)}</div>
}
