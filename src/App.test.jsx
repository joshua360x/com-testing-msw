import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from "react-router-dom"
// import fetch from "cross-fetch"
import Covi from "./components/Covi"
import Main from "./views/Main"

import { rest } from "msw";
import { setupServer } from 'msw/node'
import { data } from "./utils/data";

const handlers = [
  rest.get('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica', (req, res, ctx) => res(ctx.json([data])))
]


const server = setupServer(...handlers)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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


