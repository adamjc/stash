# Stash

### A simple in-memory cache

## Usage

```
// Initialise a cache with a 5 minute timeout
let stash = require('stash')(1000 * 60 * 5)

// Use the key 'foo' to set the value 'bar'
stash.set('foo', 'bar')

// Get the value of 'foo'
stash.get('foo')

// Remove the key and value of 'foo'
stash.remove('foo')

// Clear the cache
stash.empty()

// Get the keys of the cache
stash.keys()
```
