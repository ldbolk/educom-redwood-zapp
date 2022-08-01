// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import TakensLayout from 'src/layouts/TakensLayout'
import UsersLayout from './layouts/UsersLayout/UsersLayout'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={HeaderLayout}>
      <Private unauthenticated="home" roles="klant">
      <Set wrap={TakensLayout}>
        <Route path="/taken/new" page={TakenNewTakenPage} name="newTaken" />
        <Route path="/taken/{id:Int}/edit" page={TakenEditTakenPage} name="editTaken" />
        <Route path="/taken/{id:Int}" page={TakenTakenPage} name="taken" />
        <Route path="/taken" page={TakenTakensPage} name="takens" />
      </Set>
      </Private>
      <Route path="/klant" page={KlantPage} name="klant" />
      <Set wrap={UsersLayout}>
        <Route path="/user/new" page={KlantenNewKlantPage} name="newUser" />
        <Route path="/user/{id:Int}/edit" page={KlantenEditKlantPage} name="editUser" />
        <Route path="/user/{id:Int}" page={KlantenKlantPage} name="user" />
        <Route path="/users" page={KlantenKlantenPage} name="users" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
