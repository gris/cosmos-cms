import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import workout from './workout'
import exercise from './exercise'

export default createSchema({
  name: 'Training Journal',
  types: schemaTypes.concat([
    workout,
    exercise
  ])
})
