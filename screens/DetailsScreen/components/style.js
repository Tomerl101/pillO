import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerStyle: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 65,
    left: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DetailsTitleContainerStyles: { justifyContent: 'space-between', marginBottom: 25 },
  darkBlueColor: {
    color: '#2c3e50'
  },
  centerStyle: {
    alignItems: 'center'
  },
  viewStyle: { height: 180, margin: 30, justifyContent: 'center', alignItems: 'center' },
  imageStyle: { width: 110, height: 110 },
  marginTop: { marginTop: 25 },
  borderRadius: { borderRadius: 10 },
  modalBodyStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Raleway-SemiBold'
  },
  successImageStyle: {
    width: '100%',
    height: 260
  }
})

export default styles
