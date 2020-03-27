module.exports = {
  success,
  fail,
  repair,
  get
};

function checkItem(item) {
  const { name, durability, enhancement } = item
  if (name && durability && enhancement >= 0) {
    return true
  } else {
    return false
  }
}

function success(item) {
  if (checkItem(item) === true) {
    return {
      ...item,
      enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
    };
  } else {
    throw new Error('Item missing required fields')
  }
}

function fail(item) {
  const penalty = item.enhancement >= 15 ? 10 : 5
  if (checkItem(item) === true) {
    return {
      ...item,
      durability: item.durability - penalty,
      enhancement: item.enhancement > 0 ? item.enhancement - 1 : 0
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
