import { NextPage } from 'next';

import { useRouter } from '@main/shared';
import { AccessDeniedScreen, RequestViewScreen } from '@main/screens';

export const RequestPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) {
    return <AccessDeniedScreen />;
  }

  return <RequestViewScreen requestID={id} />;
};

export default RequestPage;
