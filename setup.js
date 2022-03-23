jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
  show: jest.fn(),
  hide: jest.fn(),
}));

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
