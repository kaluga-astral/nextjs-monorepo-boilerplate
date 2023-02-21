import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { enableStaticRendering as enableMobxStaticRendering } from 'mobx-react-lite';

import {
  ConfigProvider,
  NotificationContainer,
  QueryClientProvider,
  StylesCacheProvider,
  ThemeProvider,
  createStylesServerCache,
} from '../external';
import { monitoringErrorService, queryClient } from '../../../services';
import { theme } from '../../theme';
import { PageProgressbar } from '../PageProgressbar';

enableMobxStaticRendering(typeof window === 'undefined');

const stylesCache = createStylesServerCache({ key: 'next' });

type Props = PropsWithChildren<{ title: string }>;

export const DefaultApp = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
      </Head>
      <StylesCacheProvider value={stylesCache}>
        <ConfigProvider
          captureException={monitoringErrorService.captureException}
        >
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <NotificationContainer />
              <PageProgressbar />
              {children}
            </QueryClientProvider>
          </ThemeProvider>
        </ConfigProvider>
      </StylesCacheProvider>
    </>
  );
};
