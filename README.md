[![NPM version](https://img.shields.io/npm/v/statee.svg)](https://www.npmjs.com/package/statee)
[![Size](https://img.shields.io/bundlephobia/minzip/statee.svg)]()
[![license](https://img.shields.io/github/license/porsager/statee.svg)]()

# 📬 `statee`

> Like enums where each one can contain a value

Statee can help you make a quick state model with multiple grouped properties that are mutually exclusive, where each property can contain any value, and if one in the group is set, the others will return to their initial value.

## Simple usage example

[Live sample on flems.io](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgCsEAaEAYwHs0AXGWvCLAB0oCcaACAZRozpicwbSlk4ByOHwHiAOmnlU0UzlP6CAvD2kwYACmDzOnKJQwATCGgDmiIRihwYJI5zbwArlBp20XqC5oxjBsImy+-vIAvgCU8vJqdPimFlbWnFo0bB4w8sx6iTD4NJQAUtwA8gByejFxCso6+O5wXlxawKqiMHbiLW3inFF5enLyVZQ0EOSCKZY2nBBw9o4w4vX5hcVllTV18Y3q+CFhGZxoMADunACioeyjFQAW55TwnAC0r1zWlJTm6xGYzQEymMzcnm8i2WfigUEBaE2TRK5WqtRiIDITlg5Cm1AQiBAAHZEAAGEBREjobC4Qn4chwUgUah0BiEp40LABTgAI3+AE9OIYgryMOQANbWEQeNDmD5wCAALx6nCoADcQgBuVw8sWS6Wyj6sBV4tB2Ga0EKq+h0NjakVPGAQawcuwARlJpIApPbhg1mO4hTq9VLKDLzHY2NZdXpSSROHGE-H8ESAKwxe3GKimcKcS5PCB0TOcZgWea2Tge5gAD19mJA2JguIg+LwAA5EG7UxSALpRIA)

```js
import statee from 'statee'

const state = statee({
  loading: false,
  result: null,
  error: null
})

state.loading = true
state.result = { some: 'result' } // state.loading === false
state.error = new Error('Oh noes - not good') // state.result === null
```

### `statee(...groups)`

The `Statee` creator can take multiple arguments, where each will be a group of properties that become mutually exclusive.

### `statee.property = 'some value'`

Setting one of the specified properties will set the rest to their initial value.

### `statee('property')`

The `statee` instance itself is a function that returns a setter for any property passed to it. This is very useful if supplying it as a callback for promises and the like.
