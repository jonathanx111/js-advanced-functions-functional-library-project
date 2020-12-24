const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i])
      }

      return collection
    },

    map: function(collection, cb) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        newArray.push(cb(collection[i]))
      }

      return newArray

    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      let length = collection.length

      for (let i = 0; i < length; i++) {
        acc = callback(acc, collection[i], collection)
      }

      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) { return collection[i]}

      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      let newArray = [];

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) newArray.push(collection[idx])

      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },
    
    first: function (array, stopNumber) {
      return (stopNumber) ? array.slice(0, stopNumber) : array[0]
    },

    last: function (array, stopNumber) {
      return (stopNumber) ? array.slice(array.length - stopNumber, array.length) : array[array.length - 1]
    },

    compact: function(array) {
      let newArray = []

      for (let idx = 0; idx < array.length; idx++) {
        if (array[idx]) {
          newArray.push(array[idx])
        }
      }

      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = [...array]

      return  newArray.sort(function(a,b){
        return callback(a) - callback(b)
      })

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
