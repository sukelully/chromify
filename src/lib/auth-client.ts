import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient();

export const signIn = async () => {
  await authClient.signIn.social({
    provider: 'spotify',
    callbackURL: '/dashboard',
  });
};
