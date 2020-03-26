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
  durability: 90,
  enhancement: 0
}

const item3 = {
  name: 'MaxSword',
  attack: 10000,
  durability: 100,
  enhancement: 20
}

describe('Enhancer', function () {

  describe('succeed()', function () {
    test('check to see if proper input produces expected output', function () {
      const output = {
        name: 'SwordOfDestruction',
        attack: 80,
        durability: 35,
        enhancement: 6
      }

      const output2 = {
        name: 'ShieldOfProtection',
        defence: 120,
        durability: 90,
        enhancement: 1
      }

      const output3 = {
        name: 'MaxSword',
        attack: 10000,
        durability: 100,
        enhancement: 20
      }

      expect(enhancer.success(item1)).toStrictEqual(output)
      expect(enhancer.success(item2)).toStrictEqual(output2)
      expect(enhancer.success(item3)).toStrictEqual(output3)
    })

    test('check to see if improper input throws error', function () {
      expect(() => enhancer.success({})).toThrow()
      expect(() => enhancer.success([])).toThrow()
      expect(() => enhancer.success('asodjosa')).toThrow()
      expect(() => enhancer.success(NaN)).toThrow()
      expect(() => enhancer.success(undefined)).toThrow()
      expect(() => enhancer.success(null)).toThrow()
    })
  })

  describe('fail()', function () {
    test('check to see if proper input produces expected output', function () {
      const output = {
        name: 'SwordOfDestruction',
        attack: 80,
        durability: 30,
        enhancement: 4
      }

      const output2 = {
        name: 'ShieldOfProtection',
        defence: 120,
        durability: 85,
        enhancement: 0
      }

      const output3 = {
        name: 'MaxSword',
        attack: 10000,
        durability: 90,
        enhancement: 19
      }

      expect(enhancer.fail(item1)).toStrictEqual(output)
      expect(enhancer.fail(item2)).toStrictEqual(output2)
      expect(enhancer.fail(item3)).toStrictEqual(output3)
    })

    test.todo('check to see if inproper input throws errors')
  })

  describe('repair()', function () {
    test.todo('check to see if proper input produces expected output')
    test.todo('check to see if inproper input throws errors')
  })
})
