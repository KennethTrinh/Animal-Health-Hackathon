import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';
import { PetInfo } from './PetInfo';
import { MedHistory } from './MedHistory';
import { Diet } from './Diet';
import InteractiveChart from './InteractiveChart';
import QRCode from "react-qr-code";

const stepPages = [PetInfo, MedHistory, Diet];


const MultiStepForm = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([{
    label: 'Pet Info',
    isValid: undefined
  }, {
    label: 'Medical History',
    isValid: undefined
  }, {
    label: 'Diet',
    isValid: undefined
  }]);
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid = steps.slice(0, step).findIndex(currentStep => currentStep.isValid === false) === -1;
  const onStepSubmit = React.useCallback(event => {
    const {
      isValid,
      values
    } = event;
    const currentSteps = steps.map((currentStep, index) => ({
      ...currentStep,
      isValid: index === step ? isValid : currentStep.isValid
    }));
    setSteps(currentSteps);
    setStep(() => Math.min(step + 1, lastStepIndex));
    if (isLastStep && isPreviousStepsValid && isValid) {
      setFormState(values);
    }
  }, [steps, isLastStep, isPreviousStepsValid, step, lastStepIndex]);
  const onPrevClick = React.useCallback(event => {
    event.preventDefault();
    setStep(() => Math.max(step - 1, 0));
  }, [step, setStep]);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    <Stepper value={step} items={steps} />
    <Form initialValues={formState} onSubmitClick={onStepSubmit} render={formRenderProps => <div style={{
      alignSelf: 'center'
    }}>
      <FormElement style={{ width: 480 }}>
        {stepPages[step]}
        <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
        <div style={{ justifyContent: 'space-between', alignContent: 'center' }}
          className={'k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end'}>
          <span style={{ alignSelf: 'center' }}>Step {step + 1} of 3</span>
          <div> {step !== 0 ? <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
            Previous
          </Button> : undefined}
            <Button themeColor={'primary'} disabled={isLastStep ? !isPreviousStepsValid : false} onClick={formRenderProps.onSubmit}>
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </FormElement>
      <InteractiveChart
        diet={{
          protein: { types: ["chicken", "beef", "fish"], quantity: [1, 2, 3] },
          carbs: { types: ["rice", "potatoes", "pasta"], quantity: [1, 2, 3] },
          fat: { types: ["butter", "oil", "avocado"], quantity: [1, 2, 3] }
        }}
        form_data={formState}
        isLastStep={isLastStep}
      />
    </div>} />
    <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"https://kennethtrinh.github.io/Animal-Health-Hackathon/"}
        viewBox={`0 0 256 256`}
      />
    </div>
  </div>;
};

export default MultiStepForm;