import 'react-native';
import React from 'react';
import Input from '../src/components/Shared/Input';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

describe('Input', () => {
  it('renders correctly', async () => {
    const {getByTestId, getByPlaceholderText} = render(
      <Input
        onBlur={() => {}}
        onChangeText={() => {}}
        value={''}
        autoCapitalize={'none'}
        placeholder={'test'}
        testID={'example-input'}
      />,
    );

    const inputComponent = getByTestId('example-input');
    await waitFor(() => expect(inputComponent).toBeTruthy());

    expect(getByPlaceholderText('test')).toBeTruthy();

    fireEvent.changeText(inputComponent, 'hello');
  });
});
