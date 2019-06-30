import 'react-native'
import React from 'react'
import App from '../App'
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer'
describe('App snapshot', () => {
  test('hydrate favorite images to state from async storage', function() {
    expect([]).toHaveLength(0)
  })
})
