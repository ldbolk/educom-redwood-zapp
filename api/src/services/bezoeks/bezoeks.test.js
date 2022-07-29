import {
  bezoeks,
  bezoek,
  createBezoek,
  updateBezoek,
  deleteBezoek,
} from './bezoeks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bezoeks', () => {
  scenario('returns all bezoeks', async (scenario) => {
    const result = await bezoeks()

    expect(result.length).toEqual(Object.keys(scenario.bezoek).length)
  })

  scenario('returns a single bezoek', async (scenario) => {
    const result = await bezoek({ id: scenario.bezoek.one.id })

    expect(result).toEqual(scenario.bezoek.one)
  })

  scenario('creates a bezoek', async (scenario) => {
    const result = await createBezoek({
      input: {
        klantId: scenario.bezoek.two.klantId,
        medewerkerId: scenario.bezoek.two.medewerkerId,
      },
    })

    expect(result.klantId).toEqual(scenario.bezoek.two.klantId)
    expect(result.medewerkerId).toEqual(scenario.bezoek.two.medewerkerId)
  })

  scenario('updates a bezoek', async (scenario) => {
    const original = await bezoek({ id: scenario.bezoek.one.id })
    const result = await updateBezoek({
      id: original.id,
      input: { klantId: scenario.bezoek.two.klantId },
    })

    expect(result.klantId).toEqual(scenario.bezoek.two.klantId)
  })

  scenario('deletes a bezoek', async (scenario) => {
    const original = await deleteBezoek({ id: scenario.bezoek.one.id })
    const result = await bezoek({ id: original.id })

    expect(result).toEqual(null)
  })
})
