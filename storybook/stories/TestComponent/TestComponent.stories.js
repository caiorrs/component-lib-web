import React from 'react';
import TestComponent from '../../../src/components/TestComponent';
import {storiesOf} from '@storybook/react-native';

storiesOf('Test Component', module).add('example', () => <TestComponent />);
