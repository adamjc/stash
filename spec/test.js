const stash = require('../stash')

describe('Stash', () => {
  it('should be able to set an item', () => {
    let cache = stash()
    cache.set('foo', 'bar')
    expect(cache.size()).toBe(1)
  });

  it('should be able to get an item', () => {
    let cache = stash()
    cache.set('foo', 'foo')
    expect(cache.get('foo')).toEqual('foo')
  })

  it('should be able to empty the cache', () => {
    let cache = stash()
    cache.set('foo', 'foo')
    cache.set('bar', 'bar')
    expect(cache.keys().length).toBe(2)
    cache.empty()
    expect(cache.keys().length).toBe(0)
  })

  it('should be able to set a timeout', (done) => {
    let timeout = 1000
    let cache = stash(timeout)
    cache.set('foo', 'bar')
    expect(cache.get('foo')).toBe('bar')
    setTimeout(() => {
      expect(cache.get('foo')).toBe(null)
      done()
    }, timeout)
  })

  it('should override an already set key', () => {
    let cache = stash()
    cache.set('foo', 'bar')
    cache.set('foo', 'qux')
    expect(cache.get('foo')).toEqual('qux')
  })

  it(`should not use an overidden key's timeout`, (done) => {
    let timeout = 1000
    let cache = stash(timeout)
    cache.set('foo', 'bar')
    setTimeout(() => {
      cache.set('foo', 'qux')
      setTimeout(() => {
        expect(cache.get('foo')).toBe('qux')
        done()
      }, 500)
    }, 500)
  })
});
