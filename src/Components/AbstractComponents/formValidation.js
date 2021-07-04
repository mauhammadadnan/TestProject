import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  fullName: yup
  .string()
  .matches(/(\w.+\s).+/, 'Enter at least 2 names')
  .required('Full name is required'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

const FormValidation = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>Login Screen</Text>

          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }

                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }

                <Button 
                  onPress={handleSubmit}
                  title="LOGIN"
                  disabled={!isValid || values.email === ''}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})

export default FormValidation