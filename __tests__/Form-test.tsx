import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Form from '../src/components/Form';

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  setOptions: jest.fn(),
};

const client = {
  name: 'Verona',
  email: 'verona@gmail.com',
  username: 'verona123',
};

const route = {
  params: {
    client,
  },
};

const props = {
  navigation,
  route,
} as unknown as React.ComponentProps<typeof Form>;

describe('Form', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(<Form {...props} />);
  });
});
