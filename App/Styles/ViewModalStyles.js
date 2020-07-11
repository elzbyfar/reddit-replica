import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  viewModalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#00000095',
    width: Sizes.maxWidth
  }, 
  viewModal: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: Sizes.maxWidth * 0.95, 
    height: Sizes.maxHeight * 0.3,
    marginTop: Sizes.maxHeight * 0.67,
    borderRadius: 15
  }, 
  viewOption: {
    width: Sizes.maxWidth * 0.95, 
    height: Sizes.maxHeight * 0.05,
    alignItems: 'center',
    flexDirection: 'row', 
    marginLeft: 10,
    opacity: 0.6
  },
  viewOptionSelected: {
    opacity: 1
  },
  viewOptionImage: {
    width: Sizes.maxWidth * 0.05, 
    height: Sizes.maxHeight * 0.02,
    marginHorizontal: 15,
  },
  viewOptionText: {
    fontWeight: '600'
  }, 
  viewModalCloseButton: {
    width: Sizes.maxWidth * 0.90,
    height: Sizes.maxHeight * 0.07,
    backgroundColor: '#ddd',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewModalCloseButtonText: {
    fontWeight: '700',
    color: '#444'
  }

})

export default styles