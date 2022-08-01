import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'

const HeaderLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth();
  return(
    <>
    <Toaster />
      <header>
        <h1>
          <Link to={routes.home()}>
            <img src="https://e-learning.educom.nu/assets/images/zapp-banner-6cdd55cdd42815c9c28dd9443933187f.png" width="350" height="115"></img>
          </Link>
        </h1>
        {isAuthenticated ? (
            <div>
              <span>You're logged in</span>{' '}
              {/* As currentUser.naam */}
              <button type='button' onClick={logOut}> Logout </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        <nav>
          <ul>
            <li>
              <Link to={routes.klant()}>
                Klant
              </Link>
            </li>
            {hasRole('klant') && (
              <li>
                <Link to={routes.takens()}>Taken</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default HeaderLayout
