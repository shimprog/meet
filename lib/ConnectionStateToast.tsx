import type { Room } from 'livekit-client';
import { ConnectionState } from 'livekit-client';
import * as React from 'react';
import { SpinnerIcon, Toast, useConnectionState } from '@livekit/components-react';

/** @public */
export interface ConnectionStateToastProps extends React.HTMLAttributes<HTMLDivElement> {
  room?: Room;
}

/**
 * The `ConnectionStateToast` component displays a toast
 * notification indicating the current connection state of the room.
 * @public
 */
export function ConnectionStateToast(props: ConnectionStateToastProps) {
  const [notification, setNotification] = React.useState<React.ReactElement | undefined>(undefined);
  const state = useConnectionState(props.room);

  React.useEffect(() => {
    switch (state) {
      case ConnectionState.Reconnecting:
        setNotification(
          <>
            <SpinnerIcon className="lk-spinner" /> Повторное подключение
          </>,
        );
        break;
      case ConnectionState.Connecting:
        setNotification(
          <>
            <SpinnerIcon className="lk-spinner" /> Подключение
          </>,
        );
        break;
      case ConnectionState.Disconnected:
        setNotification(<>Отключен</>);
        break;
      default:
        setNotification(undefined);
        break;
    }
  }, [state]);
  return notification ? <Toast className="lk-toast-connection-state">{notification}</Toast> : <></>;
}
