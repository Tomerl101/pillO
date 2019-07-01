import React, { Component } from 'react'
import { ActivityIndicator, FlatList, View, TouchableOpacity, Linking, Image } from 'react-native'
// import { Image } from "react-native-elements";
import COLORS from '../../../constants/colors'
import MediumText from '../../../components/Texts/MediumText'
import Root from '../../../components/ArticleCard'
import styles from './styles'

const ArticleCard = ({ article }) => {
  const images = {
    'article_1.jpg': require('../../../assets/images/article_1.jpg'),
    'article_3.jpg': require('../../../assets/images/article_3.jpg'),
    'article_4.jpg': require('../../../assets/images/article_4.jpg')
  }

  const onPress = () => {
    Linking.openURL(article.url)
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Root>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={images[article.imageUri]}
            PlaceholderContent={<ActivityIndicator size="small" color={COLORS.GRAY} />}
          />
          <View style={styles.articleView}>
            <MediumText>{article.name}</MediumText>
          </View>
        </View>
      </Root>
    </TouchableOpacity>
  )
}

export default class ArticleList extends Component {
  _renderItem = ({ item }) => {
    return <ArticleCard article={item} />
  }

  render() {
    const { data } = this.props
    return (
      <FlatList
        data={data}
        keyExtractor={item => `${item.name}`}
        renderItem={this._renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        horizontal
      />
    )
  }
}
