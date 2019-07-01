import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 80,
    shadowColor: '#5ED1AE',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3
  },
  colorView: {
    paddingTop: 60,
    paddingHorizontal: 30,
    marginBottom: 20,
    height: 265,
    borderBottomLeftRadius: 80
  },
  pillStyle: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 0,
    top: 65
  },
  contentContainer: { marginBottom: 28 },
  articleView: {
    height: '24%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.7,
    position: 'absolute',
    bottom: 0,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: { width: '100%', height: '100%', borderRadius: 20 },
  viewStyle: { width: '100%', height: 150 }
})

export default styles
