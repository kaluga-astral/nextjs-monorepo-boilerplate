import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { authStore } from '@admin/modules/AuthModule';
import { MainLayout } from '@admin/modules/LayoutModule';
import {
  DefaultApp,
  apiHttpClient,
  configService,
  initApiHttpClient,
} from '@admin/shared';

configService.init({
  apiUrl: process.env.NEXT_PUBLIC_API_URL as string,
});

initApiHttpClient(configService.config.apiUrl);

export const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    authStore.addProtectedHttpClients([apiHttpClient]);
    authStore.signIn('token');
  }, []);

  return (
    <DefaultApp title="Admin">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </DefaultApp>
  );
};

export default App;
