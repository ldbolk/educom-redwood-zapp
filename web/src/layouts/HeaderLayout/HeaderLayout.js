import { Link, routes } from '@redwoodjs/router'

const HeaderLayout = ({ children }) => {
  return(
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
          <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-blue-400 hover:text-blue-100 transition duration-100"
              to={routes.home()}
            >
              Logo or whatever
            </Link>
          </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>where</Link>
          </li>
          <li>
            <Link to={routes.home()}>link2</Link>
          </li>
          <li>
            <Link to={routes.home()}>link3</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default HeaderLayout
