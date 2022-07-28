import { takens, taken, createTaken, updateTaken, deleteTaken } from './takens'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('takens', () => {
  scenario('returns all takens', async (scenario) => {
    const result = await takens()

    expect(result.length).toEqual(Object.keys(scenario.taken).length)
  })

  scenario('returns a single taken', async (scenario) => {
    const result = await taken({ id: scenario.taken.one.id })

    expect(result).toEqual(scenario.taken.one)
  })

  scenario('creates a taken', async () => {
    const result = await createTaken({
      input: { taak: 'String' },
    })

    expect(result.taak).toEqual('String')
  })

  scenario('updates a taken', async (scenario) => {
    const original = await taken({ id: scenario.taken.one.id })
    const result = await updateTaken({
      id: original.id,
      input: { taak: 'String2' },
    })

    expect(result.taak).toEqual('String2')
  })

  scenario('deletes a taken', async (scenario) => {
    const original = await deleteTaken({ id: scenario.taken.one.id })
    const result = await taken({ id: original.id })

    expect(result).toEqual(null)
  })
})
