import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const HeaderLayout = ({ children }) => {
  return(
    <>
    <Toaster />
      <header>
        <h1>
          <Link to={routes.home()}>
            Logo and some text maybe
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.klant()}>
                Klant
              </Link>
            </li>
            <li>
              <Link to={routes.home()}>
                Contact
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
