import 'react-native';
import React from 'react';
import Home from '../src/components/Home';
import {render, waitFor} from '@testing-library/react-native';

describe('Home', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(<Home testID={'example-home'} />);

    const exampleLogin = getByTestId('example-home');
    await waitFor(() => expect(exampleLogin).toBeTruthy());
  });
  it('shows title and subtitle', async () => {
    const {getByText} = render(<Home testID={'example-home'} />);

    const title = getByText('HEALTHY PLUS');
    const subtitle = getByText('Welcome!');
    await waitFor(() => {
      expect(title).toBeTruthy();
      expect(subtitle).toBeTruthy();
    });
  });
});
