import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import { Formik } from "formik";
import FetchingIndicator from "../FetchingIndicator";
import { ForgotPasswordSchema } from "../../utils/validation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "azure",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 10,
    fontFamily: "Staatliches_400Regular"
  },
  form: {
    margin: "auto",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9c2c98",
    width: Platform.OS === "ios" || Platform.OS === "android" ? "100%" : "50%"
  },
  errorText: {
    color: "red"
  },
  button: {
    color: "black",
    backgroundColor: "#9c2c98",
    textAlign: "center",
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 25,
    fontFamily: "Staatliches_400Regular"
  },
  text: {
    color: "azure",
    textAlign: "center",
    marginTop: 5,
    fontSize: 20,
    fontFamily: "Staatliches_400Regular"
  }
});

function ForgotPassword({ fetching, tokenSentToEmail, serverErrors, retryResetToken, resetPassToken }) {
  return (
    <View style={styles.container}>
      {tokenSentToEmail ? (
        <View>
          <Text style={styles.text}>Password Reset Link Sent To Email</Text>
          <Text style={[styles.text, { fontSize: 15 }]}>Did Not Receive Password Reset Link?</Text>
          <Text style={[styles.text, { fontSize: 15, color: "#9c2c98" }]} onPress={retryResetToken}>
            Try again
          </Text>
        </View>
      ) : (
        <View>
          <FetchingIndicator fething={fetching} />
          {serverErrors && <Text style={styles.errorText}>{JSON.stringify(serverErrors)}</Text>}
          <Formik
            initialValues={{ email: "" }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={values => resetPassToken(values.email)}>
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
              <View style={styles.form}>
                <TextInput
                  placeholder="Email Address:"
                  placeholderTextColor="#555"
                  style={styles.textInput}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                <Text style={styles.button} onPress={handleSubmit}>
                  Send Password Reset Link
                </Text>
              </View>
            )}
          </Formik>
        </View>
      )}
    </View>
  );
}

export default ForgotPassword;
