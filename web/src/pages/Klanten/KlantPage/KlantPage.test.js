import { render } from '@redwoodjs/testing/web'

import KlantPage from './KlantPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KlantPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KlantPage />)
    }).not.toThrow()
  })
})
