import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
    marginHorizontal: 16,
    fontFamily: 'Poppins',
    alignItems: 'center',
  },
  dataContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  data: {
    fontWeight: '500',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 20,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addContainer: {
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
