const enhancer = require('./enhancer.js');
// test away!

const item1 = {
  name: 'SwordOfDestruction',
  attack: 80,
  durability: 35,
  enhancement: 5
}

const item2 = {
  name: 'ShieldOfProtection',
  defence: 120,
  durability: 95,
  enhancement: 0
}

describe('Enhancing', function () {
  describe('succeed()', function () {
    test('check to see if proper input produces expected output', function () {

    })
    test.todo('check to see if inproper input throws errors')
  })

  describe('fail()', function () {
    test.todo('check to see if proper input produces expected output')
    test.todo('check to see if inproper input throws errors')
  })
})

describe('repair()', function () {
  test.todo('check to see if proper input produces expected output')
  test.todo('check to see if inproper input throws errors')
})