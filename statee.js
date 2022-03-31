export default statee

function statee(...args) {
  const values = {}
  let observer

  args.forEach(group => {
    if (typeof group === 'function')
      observer = group

    const keys = Object.keys(group)
    keys.forEach(key => {
      const getter = Object.getOwnPropertyDescriptor(group, key).get
      values[key] = group[key]
      Object.defineProperty(statee, key, {
        enumerable: true,
        get: getter || (() => values[key]),
        set: getter ? undefined : (value => {
          if (value === values[key])
            return
          keys.forEach(k => values[k] = group[k])
          values[key] = value
          observer && observer(key, value)
        })
      })
    })
  })

  statee.toJSON = () => values
  return typeof Object.seal === 'function'
    ? Object.seal(statee)
    : statee

  function statee(key) {
    if (!(key in statee))
      throw new Error('Key ' + key + ' not defined')

    return value => statee[key] = value
  }

}
