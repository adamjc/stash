function stash (timeout) {
  let cache = {}

  function set (key, value) {
    if (cache[key]) {
      remove(key)
    }

    cache[key] = {}
    cache[key].value = value

    if (timeout) {
      cache[key].timeout = setTimeout(function () {
        remove(key)
      }, timeout)
    }
  }

  function get (key) {
    if (cache[key]) {
      return cache[key].value
    }

    return null
  }

  function remove (key) {
    clearTimeout(cache[key].timeout)
    cache[key] = null
  }

  function empty () {
    for (key in cache) {
      clearTimeout(key.timeout)
    }

    cache = {}
  }

  return {
    set: set,
    get: get,
    keys: () => Object.keys(cache),
    empty: empty
  }
}

module.exports = stash
