/* eslint-disable react/no-unescaped-entities */

import React, { useRef } from 'react';
import yup from '../../../common/utils/yup-extendend';
import { Formik, Field, Form, FormikProps } from 'formik';
import Input from '../../../common/view/components/input/input.component';

interface FormValues {
  accountName: string;
  accountEmail: string;
  toggle: boolean;
  accountOptions: string[];
  accountSingleOption?: string;
}

const initialValues: FormValues = {
  accountName: '',
  accountEmail: '',
  toggle: false,
  accountOptions: [],
  accountSingleOption: undefined
};

const formSchema = yup.object().shape({
  accountName: yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  accountEmail: yup.string().email('Invalid email').required('Required')
});

const AccountsForm = () => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  return (
    <div>
      <h2>Accounts form</h2>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values) => {
          // eslint-disable-next-line no-console
          console.log('Submit formik', values);
        }}>
        {({ values, handleChange, errors, touched }: FormikProps<FormValues>) => (
          <Form>
            <Input
              label="Account name"
              onChange={handleChange}
              name="accountName"
              value={values.accountName}
              hasError={Boolean(errors.accountName && touched.accountName)}
              errorMsg={errors.accountName}
            />

            <br />
            <Input
              label="Account email"
              onChange={handleChange}
              name="accountEmail"
              value={values.accountEmail}
              hasError={Boolean(errors.accountEmail && touched.accountEmail)}
              errorMsg={errors.accountEmail}
            />

            <br />
            {/*This checkbox uses the traditional method of an input element with handleChange function as onChange handler*/}
            <label>
              <input type="checkbox" name="toggle" onChange={handleChange} checked={values.toggle} />
              I'm a basic checkbox
            </label>

            <br />
            <div id="checkbox-group">
              <h4>Account options</h4>
            </div>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="accountOptions" value="One" />
                Option one
              </label>
              <label>
                <Field type="checkbox" name="accountOptions" value="Two" />
                Option two
              </label>
              <label>
                <Field type="checkbox" name="accountOptions" value="Three" />
                Option three
              </label>
            </div>

            <br />
            <select name="accountSingleOption" onChange={handleChange} value={values.accountSingleOption}>
              <option>---</option>
              <option value="option-one">Option one</option>
              <option value="option-two">Option two</option>
              <option value="option-three">Option three</option>
            </select>

            <br />
            {/*Submit should be always be triggered with a submit button if not a formik ref can be used to submit programmatically*/}
            <button type="submit">Submit</button>

            <br />
            {/*Submit programmatically*/}
            <button type="button" onClick={() => formikRef.current?.submitForm()}>
              Submit with ref
            </button>

            <br />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountsForm;
