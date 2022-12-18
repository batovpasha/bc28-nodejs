/**
 * 1. Отримувати рік у вигляді цілого числа
 * 2. Вертати true, якщо рік високосний, false - якщо ні
 * 3. Якщо отримані дані некоректні - викидувати помилку з відповідним текстом
 * 
 * 2008 -> true
 * 2003 -> false
 * 2000 -> true
 * 
 * 2008.4 -> throw error 'year must be integer'
 * undefined -> throw error 'year must exist'
 * '2008' -> throw error 'year must be number'
 * false -> throw error 'year must be number'
 * true -> throw error 'year must be number'
 * null -> throw error 'year must be number'
 * () => {} -> throw error 'year must be number'
 */

const isLeapYear = require('./isLeapYear');

describe('isLeapYear', () => {
  describe('positive', () => {
    test('2008 - true', () => {
      const result = isLeapYear(2008);

      expect(result).toEqual();
    });

    test('2003 - false', () => {
      const result = isLeapYear(2003);

      expect(result).toBe(false);
    });

    it('should return true when is called with 2000', () => {
      const result = isLeapYear(2000);

      expect(result).toBe(true);
    });
  });

  describe('negative', () => {
    test('2008.4 - error "year must be integer"', () => {
      expect(() => isLeapYear(2008.4)).toThrow('year must be integer');
    })

    test('undefined - error "year must exist"', () => {
      expect(() => isLeapYear()).toThrow('year must exist');
    });

    test('"2008" - error "year must be number"', () => {
      expect(() => isLeapYear('2008')).toThrow('year must be number');
    });
  });
});