import { db } from 'src/lib/db'

export const takens = () => {
  return db.taken.findMany()
}

export const taken = ({ id }) => {
  return db.taken.findUnique({
    where: { id },
  })
}

export const createTaken = ({ input }) => {
  return db.taken.create({
    data: input,
  })
}

export const updateTaken = ({ id, input }) => {
  return db.taken.update({
    data: input,
    where: { id },
  })
}

export const deleteTaken = ({ id }) => {
  return db.taken.delete({
    where: { id },
  })
}
