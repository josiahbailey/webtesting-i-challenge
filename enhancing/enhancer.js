module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement + 1
  };
}

function fail(item) {
  const penalty = item.enhancement > 15 ? 5 : 10
  return {
    ...item,
    durability: item.durability - penalty,
    enhancement: item.enhancement - 1
  };
}

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
