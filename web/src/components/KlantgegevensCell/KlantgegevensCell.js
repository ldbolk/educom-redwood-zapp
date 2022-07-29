export const QUERY = gql`
  query KlantgegevensQuery {
    klantgegevens: takens {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ klantgegevens }) => {
  const hasExtra = klantgegevens.hasOwnProperty('extra')
  return (
    <ul>
      {klantgegevens.map((item) => (
        <item key={item.id}>
          <header>
            <h2>{item.taak}</h2>
          </header>
          {item.hasOwnProperty('extra') && (
            <p>{item.extra}</p>
          )}
        </item>
      ))}
    </ul>
  )
}
