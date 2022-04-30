import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from "react-router-dom"
// import fetch from "cross-fetch"
import Covi from "./components/Covi"
import Main from "./views/Main"


test('should render non loading state of everything in order', async () => {
  render( <MemoryRouter>
    <Main />
  </MemoryRouter>
  )

  const dropdown = await screen.findByRole('combobox')

  // const firstdebug = screen.debug();
  const userE = userEvent.selectOptions(dropdown, ['TotalDeaths'])

  return waitFor(() => {
    // const seconddebug = screen.debug();

    expect(userE).toBeFalsy()
  })

})



test('should render the Covi componenet', async () => {
  const data = {
    Country: 'UK',
    Infection_Risk: 25,
    TotalCases: 700,
    TotalDeaths: 500,
    TotalRecovered: 300
  }


  render(<Covi {...data} />)



// screen.debug()

  const coviComponent = screen.getByRole('renCovi')

  expect(coviComponent).toBeInTheDocument()

})


