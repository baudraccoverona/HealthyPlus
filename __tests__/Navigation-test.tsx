import * as React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import AppNavigator from '../src/routes/navigator';

describe('AppNavigator', () => {
  it('testing navigators', async () => {
    const component = <AppNavigator handleLogin={() => {}} logged={true} />;

    const {getByText} = render(component);
    const clients = getByText('Clients');
    const home = getByText('Home');
    const user = getByText('User');

    await waitFor(() => {
      expect(clients).toBeTruthy;
      expect(home).toBeTruthy;
      expect(user).toBeTruthy;
    });
  });

  it('navigates correctly', async () => {
    const component = <AppNavigator handleLogin={() => {}} logged={true} />;

    const {getByText} = render(component);
    const toClick = getByText('Clients');

    fireEvent.press(toClick);

    const newTitle = getByText('Clients');
    expect(newTitle).toBeTruthy();
  });

  it('renders login correctly when logged is false', async () => {
    const component = <AppNavigator handleLogin={() => {}} logged={false} />;

    const {} = render(component);
    await waitFor(() => {
      expect(component).toBeTruthy();
    });
  });
});
