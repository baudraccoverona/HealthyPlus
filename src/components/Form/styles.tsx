import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 150,
    paddingBottom: 300,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    padding: 10,
    fontSize: 20,
  },
  input: {
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderBottomColor: '#191970',
  },
  button: {
    backgroundColor: '#191970',
    borderRadius: 5,
    width: 340,
    height: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
  },
});

export default styles;
