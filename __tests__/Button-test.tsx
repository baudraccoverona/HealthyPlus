import 'react-native';
import React from 'react';
import Button from '../src/components/Shared/Button';
import {render, waitFor} from '@testing-library/react-native';

describe('Button', () => {
  it('renders correctly', async () => {
    const {getByText, queryByTestId} = render(
      <Button onPress={() => {}} text="Test text" testID="example-button" />,
    );

    await waitFor(() => expect(queryByTestId('example-button')).toBeTruthy());

    expect(getByText('Test text')).toBeTruthy();
  });
});
