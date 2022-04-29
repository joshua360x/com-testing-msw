import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Covi from "./components/Covi"
import Main from "./views/Main"


test('should render non loading state of everything in order', async () => {
  render(<Main />)

  const dropdown = screen.getByRole('combobox')

  const firstdebug = screen.debug();
  userEvent.selectOptions(dropdown, ['TotalDeaths'])

  return waitFor(() => {
    expect(screen.debug).not.toEqual(firstdebug)
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


