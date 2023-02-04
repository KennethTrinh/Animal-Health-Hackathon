import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormRadioGroup } from './form-components';
import { exerciseActiviity } from './Data';

export const PaymentDetails = <div>

    <Field key={'exercise'} id={'exercise'} name={'exercise'} label={'Exercise'} hint={'1 being the least and 5 being the most'} component={FormRadioGroup} data={exerciseActiviity} layout={'horizontal'} />


  </div>;