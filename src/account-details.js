import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput, FormNumericTextBox, FormAutoComplete } from './form-components';
import { petNameValidator, petAgeValidator, petBreedValidator, petWeightValidator } from './validators';
import { dog_breeds } from './Data';

export const AccountDetails = <div>
    <Field key={'petName'} id={'petName'} name={'petName'} label={'Pet Name'} component={FormInput} validator={petNameValidator} />
    <Field key={'petAge'} id={'petAge'} name={'petAge'} label={'Pet Age'} component={FormNumericTextBox} validator={petAgeValidator}  />
    <Field key={'petBreed'} id={'petBreed'} name={'petBreed'} label={'Pet Breed'} component={FormAutoComplete} data={dog_breeds} validator={petBreedValidator} />
    <Field key={'petWeight'} id={'petWeight'} name={'petWeight'} label={'Pet Weight'} component={FormNumericTextBox} validator={petWeightValidator}  />
  </div>;