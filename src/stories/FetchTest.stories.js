import { rest } from 'msw'
import MyFetchTest from '../components/FetchTest.vue'

export default {
  title: 'Example/FetchTest',
  component: MyFetchTest,
}

const Template = args => ({
  components: { MyFetchTest },
  setup() {
    return { ...args }
  },
  template: '<MyFetchTest />',
})

const films = [
  {
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl: `(Mocked) Rebel spaceships have won their first victory against the evil Galactic Empire.`,
  },
  {
    title: 'Empire Strikes Back',
    episode_id: 5,
    opening_crawl: `(Mocked) Imperial troops are pursuing the Rebel forces across the galaxy.`,
  },
  {
    title: 'Return of the Jedi',
    episode_id: 6,
    opening_crawl: `(Mocked) Luke Skywalker has returned to his home planet of Tatooine to rescue Han Solo.`,
  },
]

export const SuccessBehavior = Template.bind({})
SuccessBehavior.parameters = {
  msw: [
    rest.get('https://swapi.dev/api/films/', (req, res, ctx) => {
      return res(
        ctx.json({
          results: films,
        })
      )
    }),
  ],
}

export const MockedError = Template.bind({})
MockedError.parameters = {
  msw: [
    rest.get('https://swapi.dev/api/films/', (req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(403))
    }),
  ],
}
