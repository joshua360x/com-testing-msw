import { render, screen } from "@testing-library/react"
import Covi from "./components/Covi"


test('should render non loading state of everything in order', async () => {
  
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


