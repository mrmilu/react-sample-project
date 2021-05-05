import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import results from '../../src/stories/.jest-test-results.json';

addDecorator(withTests({ results }));
