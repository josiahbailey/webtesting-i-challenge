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

  describe('success()', function () {
    test('check proper success use', function () {
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

    test('check improper success use', function () {
      expect(() => enhancer.success({})).toThrow()
      expect(() => enhancer.success([])).toThrow()
      expect(() => enhancer.success('asodjosa')).toThrow()
      expect(() => enhancer.success(NaN)).toThrow()
      expect(() => enhancer.success(undefined)).toThrow()
      expect(() => enhancer.success(null)).toThrow()
    })
  })

  describe('fail()', function () {
    test('check proper fail use', function () {
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

    test('check improper fail use', function () {
      expect(() => enhancer.fail({})).toThrow()
      expect(() => enhancer.fail([])).toThrow()
      expect(() => enhancer.fail('asodjosa')).toThrow()
      expect(() => enhancer.fail(NaN)).toThrow()
      expect(() => enhancer.fail(undefined)).toThrow()
      expect(() => enhancer.fail(null)).toThrow()
    })
  })

  describe('repair()', function () {
    test('check proper repair use', function () {
      const output = {
        name: 'SwordOfDestruction',
        attack: 80,
        durability: 100,
        enhancement: 5
      }

      const output2 = {
        name: 'ShieldOfProtection',
        defence: 120,
        durability: 100,
        enhancement: 0
      }

      const output3 = {
        name: 'MaxSword',
        attack: 10000,
        durability: 100,
        enhancement: 20
      }

      expect(enhancer.repair(item1)).toStrictEqual(output)
      expect(enhancer.repair(item2)).toStrictEqual(output2)
      expect(enhancer.repair(item3)).toStrictEqual(output3)
    })

    test('check improper repair use', function () {
      expect(() => enhancer.repair({})).toThrow()
      expect(() => enhancer.repair([])).toThrow()
      expect(() => enhancer.repair('asodjosa')).toThrow()
      expect(() => enhancer.repair(NaN)).toThrow()
      expect(() => enhancer.repair(undefined)).toThrow()
      expect(() => enhancer.repair(null)).toThrow()
    })
  })
})
