import { RequestViewer } from '@main/modules/RequestModule';

export type RequestViewProps = { requestID: string };

export const RequestViewScreen = ({ requestID }: RequestViewProps) => {
  return <RequestViewer requestID={requestID} />;
};
