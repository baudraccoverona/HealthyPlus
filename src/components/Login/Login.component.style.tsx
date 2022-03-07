import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 200,
    paddingBottom: 500,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: 'Poppins',
    backgroundColor: '#ffffff',
  },
  input: {
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderBottomColor: '#191970',
  },
  button: {
    backgroundColor: '#191970',
    borderRadius: 5,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 0,
    alignSelf: 'center',
  },
  signUp: {
    paddingLeft: 5,
    fontWeight: '600',
    color: '#191970',
  },
});
