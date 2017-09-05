import React from 'react';
import { snapshotHelper } from '../../util/testHelpers';
import { Timestamp } from './Timestamp';

const testProps = {
  timestamp: 'timestamp'
};

describe('Timestamp', () => {
  it('renders correctly', () => {
    snapshotHelper.assertMatch(<Timestamp {...testProps} />);
  });
});
