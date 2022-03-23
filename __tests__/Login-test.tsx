import 'react-native';
import React from 'react';
import Login from '../src/components/Login';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Toast from 'react-native-simple-toast';
import storeData from '../src/components/Login';

describe('Login', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(
      <Login handleLogin={() => {}} testID={'example-login'} />,
    );

    const exampleLogin = getByTestId('example-login');
    await waitFor(() => expect(exampleLogin).toBeTruthy());
  });

  it('shows toast for wrong email', async () => {
    const mockShow = jest.fn();
    jest.spyOn(Toast, 'show').mockImplementationOnce(mockShow);
    const {getByText, getByDisplayValue} = render(
      <Login handleLogin={() => {}} />,
    );

    const emailInput = getByDisplayValue('test@test.com.ar');
    fireEvent.changeText(emailInput, 'test');

    await waitFor(() => {
      fireEvent.press(getByText('Log in'));
      expect(mockShow).toHaveBeenCalledWith('Invalid user, try again.');
    });
  });

  it('shows toast for wrong password', async () => {
    const mockShow = jest.fn();
    jest.spyOn(Toast, 'show').mockImplementationOnce(mockShow);
    const {getByDisplayValue, getByText} = render(
      <Login handleLogin={() => {}} />,
    );

    const passwordInput = getByDisplayValue('test123');
    fireEvent.changeText(passwordInput, 'test');

    await waitFor(() => {
      fireEvent.press(getByText('Log in'));
      expect(mockShow).toHaveBeenCalledWith('Invalid password, try again.');
    });
  });

  it('shows toast for wrong email and password', async () => {
    const mockShow = jest.fn();
    jest.spyOn(Toast, 'show').mockImplementationOnce(mockShow);
    const {getByDisplayValue, getByText} = render(
      <Login handleLogin={() => {}} />,
    );

    const emailInput = getByDisplayValue('test@test.com.ar');
    fireEvent.changeText(emailInput, 'test');

    const passwordInput = getByDisplayValue('test123');
    fireEvent.changeText(passwordInput, 'test');

    await waitFor(() => {
      fireEvent.press(getByText('Log in'));
      expect(mockShow).toHaveBeenCalledWith('Invalid credentials, try again.');
    });
  });

  it('stores data correctly and handles login', async () => {
    const mockStoreData = jest.fn(storeData);
    const {getByText} = render(<Login handleLogin={() => {}} />);
    await waitFor(() => {
      fireEvent.press(getByText('Log in'));
      expect(mockStoreData).toHaveBeenCalled;
    });
  });
});
