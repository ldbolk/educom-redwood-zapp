// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import TakensLayout from 'src/layouts/TakensLayout'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HeaderLayout}>
      <Set wrap={TakensLayout}>
        <Route path="/taken/new" page={TakenNewTakenPage} name="newTaken" />
        <Route path="/taken/{id:Int}/edit" page={TakenEditTakenPage} name="editTaken" />
        <Route path="/taken/{id:Int}" page={TakenTakenPage} name="taken" />
        <Route path="/taken" page={TakenTakensPage} name="takens" />
      </Set>
      <Route path="/klant" page={KlantPage} name="klant" />
      <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
