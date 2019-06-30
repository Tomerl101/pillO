import 'react-native'
import React from 'react'
import '../setupTest'
import userStore from '../store/userStore'
import ProgressBar from '../components/ProgressBar'
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer'

describe('App snapshot', () => {
  test('hydrate favorite images to state from async storage', function() {
    expect([]).toHaveLength(0)
  })

  test('should return taken perscription', function() {
    userStore.setFilter('TAKEN')
    expect(userStore.filteredPerscription).toHaveLength(1)
  })

  test('should load perscription', function() {
    expect(userStore.perscriptionsList).toHaveLength(4)
  })

  test('should set taken perscription', () => {
    userStore.setTaken(2)
    expect(userStore.takenPerscriptionsCount).toBe(2)
  })

  test('renderer ProgressBar with 2 taken perscription', () => {
    const taken = userStore.takenPerscriptionsCount
    const total = userStore.totalPerscriptionCount

    const tree = renderer.create(<ProgressBar taken={taken} total={total} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
