import Klant from "../Klant/Klant"

export const QUERY = gql`
  query FindUserById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }) => {
  return <Klant user={user} />
}
