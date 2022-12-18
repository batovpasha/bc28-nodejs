function isLeapYear(year) {
  if (year === undefined) {
    throw new Error('year must exist');
  }

  if (typeof year !== 'number') {
    throw new Error('year must be number');
  }

  if (!Number.isInteger(year)) {
    throw new Error('year must be integer');
  }

  const days = new Date(year, 2, 0).getDate();

  return (days === 29);
}

module.exports = isLeapYear;