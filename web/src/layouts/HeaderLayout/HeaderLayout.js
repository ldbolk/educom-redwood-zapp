import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'

const HeaderLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth();

  return(
    <>
    <Toaster />
      <header>
        <h1>
          <Link to={routes.home()}>
            Logo and some text maybe
          </Link>
        </h1>
        {/* {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type='button' onClick={logOut}> Logout </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )} */}
        <nav>
          <ul>
            <li>
              <Link to={routes.klant()}>
                Klant
              </Link>
            </li>
            <li>
              <Link to={routes.takens()}>
                Taken
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default HeaderLayout
