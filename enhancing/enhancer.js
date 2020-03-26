module.exports = {
  succeed,
  fail,
  repair,
  get
};

function checkItem(item) {
  const { name, durability, enhancement } = item
  if (name && durability && enhancement) {
    return true
  } else {
    return false
  }
}

function succeed(item) {
  if (checkItem(item) === true) {
    return {
      ...item,
      enhancement: item.enhancement + 1
    };
  } else {
    throw new Error('Item missing required fields')
  }
}

function fail(item) {
  const penalty = item.enhancement > 15 ? 5 : 10
  if (checkItem(item) === true) {
    return {
      ...item,
      durability: item.durability - penalty,
      enhancement: item.enhancement - 1
    };
  } else {
    throw new Error('Item missing required fields')
  }
}

function repair(item) {
  if (checkItem(item) === true) {
    return {
      ...item,
      durability: 100
    };
  } else {
    throw new Error('Item missing required fields')
  }
}

function get(item) {
  return { ...item };
}
