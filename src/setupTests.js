// global.fetch = (...args) =>
//   import('cross-fetch').then(({ default: fetch }) => fetch(...args));

import { rest } from "msw";
import { setupServer } from 'msw/node'
import { data } from "./utils/data";


const handlers = [
  rest.get('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica', (req, res, ctx) => res(ctx(json([data]))))
]


export const server = setupServer(...handlers)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


