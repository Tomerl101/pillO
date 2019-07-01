import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  IconStyle: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -65
  },
  rowTitleStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  center: {
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 10,
    color: '#2c3e50',
    marginVertical: 0
  },
  barTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 38,
    marginTop: 8,
    marginBottom: 12
  },
  bigFontStyle: {
    fontSize: 28
  },
  greenColor: {
    color: '#1E6B53'
  },
  leftMargin: {
    marginLeft: 42
  },
  rowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingLeft: 0
  },
  pillStyle: {
    marginLeft: 20,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff'
  },
  smallPillStyle: {
    width: 25,
    height: 50,
    transform: [{ rotate: '63deg' }]
  },
  bigPillStyle: {
    width: 35,
    height: 70,
    marginRight: -8,
    transform: [{ rotate: '-35deg' }]
  }
})
export default styles
