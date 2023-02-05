import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormRadioGroup, FormTextArea} from './form-components';
import { exerciseActivity, feedingStyle } from './Data';


export const Diet = <div>

    <Field key={'exercise'} id={'exercise'} name={'exercise'} label={'Exercise'} hint={'1 being the least and 5 being the most'} component={FormRadioGroup} 
     layout={'horizontal'} data={exerciseActivity} />

    <Field key={'feeding Style'} id={'feeding Style'} name={'feeding Style'} label={'Feeding Style'} component={FormRadioGroup}  
    layout={'horizontal'} data={feedingStyle} />

    <Field key={'carbohydrates'} id={'carbohydrates'} name={'carbohydrates'} label={'Carbohydrates'} component={FormTextArea}
    hint={'Specify <food>, <amount in grams> per line for every food'} optional={true}  />
    <Field key={'fats'} id={'fats'} name={'fats'} label={'Fats'} component={FormTextArea} 
    hint={'Specify <food>, <amount in grams> per line for every food'} optional={true} />
    <Field key={'proteins'} id={'proteins'} name={'proteins'} label={'Proteins'} component={FormTextArea} 
    hint={'Specify <food>, <amount in grams> per line for every food'} optional={true} />


  </div>;

  
