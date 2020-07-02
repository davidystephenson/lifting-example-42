import React, { useState } from 'react';

function Child ({ child, makeChildHungry }) {
  // const [hungry, setHungry] = useState()
  const { age, hungry } = child

  const message = hungry ? 'I am hungry' : 'I am not hungry'

  function onClick () {
    makeChildHungry(age)
    // setHungry(true)
  }

  return <p>
    I am {age} years old, and {message}
    {' '}
    <button onClick={onClick}>Hungry</button>
  </p>
}

function Parent () {
  const initial = [
    { age: 10, hungry: false },
    { age: 12, hungry: false },
    { age: 6, hungry: false }
  ]
  const [
    childInformations, setChildInformations
  ] = useState(initial)

  function makeChildHungry (age) {
    console.log('age test:', age)

    const newChildInformations = childInformations
      .map(childInformation => {
        const match = age === childInformation.age

        if (match) {
          const newChildInformation = {
            ...childInformation, hungry: true
          }

          return newChildInformation
        }

        return childInformation
      })

    setChildInformations(newChildInformations)
  }

  // iterate - do something for each one
  const children = childInformations
    .map(childInformation => (
      <Child
        child={childInformation}
        makeChildHungry={makeChildHungry}
      />
    ))

  // aggregate - do something for everything all together
  const hungries = childInformations.filter(
    childInformation => childInformation.hungry
  )
  const total = hungries.length

  return <div>
    {children}

    We need to make {total} meals.
  </div>
}

function App() {
  return <div>
    hello
    <Parent />
  </div>
}

export default App