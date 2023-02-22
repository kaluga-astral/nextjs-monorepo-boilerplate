import { NextPage } from 'next';

import { useRouter } from '@admin/shared';
import { AccessDeniedScreen, RequestViewScreen } from '@admin/screens';

export const RequestPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) {
    return <AccessDeniedScreen />;
  }

  return <RequestViewScreen requestID={id} />;
};

export default RequestPage;
