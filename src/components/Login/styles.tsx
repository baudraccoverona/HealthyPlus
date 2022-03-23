import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    paddingBottom: 500,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: 'Poppins',
    backgroundColor: '#ffffff',
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

export default styles;
