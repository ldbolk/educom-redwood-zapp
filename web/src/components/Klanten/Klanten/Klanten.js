import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Klanten/KlantenCell'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const KlantenList = ({ klanten }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>

            <th>Naam</th>

            <th>Email</th>

            <th>Adres</th>

            <th>Postcode</th>

            <th>Woonplaats</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {klanten.map((klanten) => (
            <tr key={klanten.id}>
              <td>{truncate(klanten.id)}</td>

              <td>{truncate(klanten.naam)}</td>

              <td>{truncate(klanten.email)}</td>

              <td>{truncate(klanten.adres)}</td>

              <td>{truncate(klanten.postcode)}</td>

              <td>{truncate(klanten.woonplaats)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.klant({ id: klanten.id })}
                    title={'Show user ' + klanten.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editKlant({ id: klanten.id })}
                    title={'Edit klanten ' + klanten.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete user ' + klanten.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(klanten.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KlantenList
