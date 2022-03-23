import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import List from '../src/components/List';

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
} as unknown as React.ComponentProps<typeof List>;

describe('List', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<List {...props} testID={'example-list'} />);

    const exampleList = getByTestId('example-list');
    expect(exampleList).toBeTruthy();
  });
});
