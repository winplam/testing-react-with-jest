import { toggleDone, deleteTodo } from '../app/state-functions'

test('toggleDone completes an incomplete todo', () => {
  const startState = {
    todos: [{ id: 1, done: false, name: 'Buy Milk' }]
  }

  const finState = toggleDone(startState, 1)

  expect(finState.todos).toEqual([
    { id: 1, done: true, name: 'Buy Milk' }
  ])

})

test('deleteTodo deletes the todo it is given', () => {
    const startState = {
      todos: [{ id: 1, done: false, name: 'Buy Milk' }]
    }

    const finState = deleteTodo(startState, 1)

    expect(finState.todos).toEqual([])
  }
)

