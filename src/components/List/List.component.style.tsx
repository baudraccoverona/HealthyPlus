import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
    marginHorizontal: 16,
    fontFamily: 'Poppins',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
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
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  addContainer: {
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loading: {
    fontWeight: '500',
    fontSize: 20,
    alignSelf: 'center',
  },
  icon: {
    padding: 5,
  },
});
