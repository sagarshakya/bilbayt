import React from 'react';
import {render} from '@testing-library/react-native';

import {RegisterScreen} from '../src/screens';

describe('RegisterScreen component', () => {
  it('renders Username, Password and Full name labels', async () => {
    const {getByText} = render(<RegisterScreen />);

    const usernameLabel = await getByText('Username');
    const passwordLabel = await getByText('Password');
    const fullNameLabel = await getByText('Full Name');

    expect(usernameLabel).toBeTruthy();
    expect(passwordLabel).toBeTruthy();
    expect(fullNameLabel).toBeTruthy();
  });

  it('renders Username, Password and Full name input fields', async () => {
    const {getByPlaceholderText} = render(<RegisterScreen />);

    const usernameInput = await getByPlaceholderText('Enter a username');
    const passwordInput = await getByPlaceholderText('Enter a password');
    const fullNameInput = await getByPlaceholderText('Enter your Full Name');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(fullNameInput).toBeTruthy();
  });

  it('renders Register Button', async () => {
    const {getByTestId} = render(<RegisterScreen />);

    const registerButton = await getByTestId('register-button');

    expect(registerButton).toBeTruthy();
  });
});
