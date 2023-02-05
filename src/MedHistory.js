import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormTextArea } from './form-components';

export const MedHistory = <div>
    <Field key={'chronic diseases'} id={'chronic diseases'} name={'chronic diseases'} label={'Chronic diseases'} optional={true} component={FormTextArea} />
    <Field key={'allergies'} id={'allergies'} name={'allergies'} label={'Allergies'} optional={true} component={FormTextArea} />
  </div>;