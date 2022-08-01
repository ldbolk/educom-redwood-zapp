import { Link, routes } from '@redwoodjs/router'

import Klanten from '../Klanten/Klanten';

export const QUERY = gql`
  query FindKlanten {
    klanten {
      id
      naam
      email
      adres
      postcode
      woonplaats
    }
  }
`

console.log(Klanten)

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No klanten yet. '}

      <Link to={routes.newKlant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klanten }) => {
  return <Klanten klanten={klanten} />
}
