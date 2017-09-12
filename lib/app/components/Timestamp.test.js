import React from 'react';
import { snapshotHelper } from '../../util/testHelpers';
import { Timestamp } from './Timestamp';

const testProps = {
  timestampDisplay: 'current time'
};

describe('Timestamp', () => {
  it('renders correctly', () => {
    snapshotHelper.assertMatch(<Timestamp {...testProps} />);
  });
});
