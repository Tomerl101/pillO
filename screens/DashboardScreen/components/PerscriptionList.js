import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'
import Card from '../../../components/Card'
import styles from './styles'
class PerscriptionList extends Component {
  onCardPress = item => {
    this.props.navigation.push('DetailsScreen', { item })
  }

  _renderItem = ({ item }) => {
    return <Card onPress={() => this.onCardPress(item)} prescription={item} />
  }

  render() {
    const { data } = this.props
    return (
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={this._renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        horizontal
      />
    )
  }
}

export default withNavigation(PerscriptionList)
