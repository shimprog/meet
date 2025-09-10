import * as React from 'react';
import { FocusLayoutProps } from '@livekit/components-react';
import { ParticipantTile } from '@/lib/ParticipantTile';

export function FocusLayout({ trackRef, ...htmlProps }: FocusLayoutProps) {
  return <ParticipantTile trackRef={trackRef} {...htmlProps} />;
}
