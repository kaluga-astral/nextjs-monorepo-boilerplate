import { useState } from 'react';

import { APP_ROUTES, PageLayout, router } from '@main/shared';
import {
  DraftRequestForm,
  createDraftRequestStore,
} from '@main/modules/RequestModule';

import { CreateDraftContentState } from './ContentState';

export const CreateDraftRequestScreen = () => {
  const [
    { isSuccess, createRequest, errorMessage, isLoading, retryCreateRequest },
  ] = useState(() =>
    createDraftRequestStore({
      onSuccessCreateRequest: (requestID) => {
        setTimeout(() => {
          router.push(APP_ROUTES.request.getRedirectPath(requestID));
        }, 3000);
      },
    }),
  );

  return (
    <PageLayout
      header={{ title: 'Создание заявки' }}
      content={{
        children: (
          <CreateDraftContentState
            isError={Boolean(errorMessage)}
            errorMessage={errorMessage}
            isLoading={isLoading}
            isSuccess={isSuccess}
            onRetryCreate={retryCreateRequest}
          >
            <DraftRequestForm onSubmit={createRequest} />
          </CreateDraftContentState>
        ),
      }}
    />
  );
};
