import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import FetchingIndicator from "../FetchingIndicator";
import { ChangePasswordSchema } from "../../utils/validation";

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

function ChangePassword({ fetching, serverErrors, changePass, primaryTextColor, backgroundColor, purpleTheme }) {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <FetchingIndicator fething={fetching} />
      <Formik
        initialValues={{ currentPassword: "", newPassword: "", confirmNewPassword: "" }}
        validationSchema={ChangePasswordSchema}
        onSubmit={changePass}>
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
          <View style={styles.form}>
            <TextInput
              secureTextEntry
              placeholder="Current Password:"
              placeholderTextColor="#555"
              style={[styles.textInput, {color: primaryTextColor}]}
              onChangeText={handleChange("currentPassword")}
              value={values.currentPassword}
              onBlur={handleBlur("currentPassword")}
            />
            {errors.currentPassword && touched.currentPassword && (
              <Text style={styles.errorText}>{errors.currentPassword}</Text>
            )}
            <TextInput
              secureTextEntry
              placeholder="New Password:"
              placeholderTextColor="#555"
              style={[styles.textInput, {color: primaryTextColor}]}
              onChangeText={handleChange("newPassword")}
              value={values.newPassword}
              onBlur={handleBlur("newPassword")}
            />
            {errors.newPassword && touched.newPassword && <Text style={styles.errorText}>{errors.newPassword}</Text>}
            <TextInput
              secureTextEntry
              placeholder="Confirm New Password:"
              placeholderTextColor="#555"
              style={[styles.textInput, {color: primaryTextColor}]}
              onChangeText={handleChange("confirmNewPassword")}
              value={values.confirmNewPassword}
              onBlur={handleBlur("confirmNewPassword")}
            />
            {errors.confirmNewPassword && touched.confirmNewPassword && (
              <Text style={styles.errorText}>{errors.confirmNewPassword}</Text>
            )}
            {serverErrors && <Text style={styles.errorText}>{JSON.stringify(serverErrors)}</Text>}
            <Text style={[styles.button, {backgroundColor: purpleTheme}]} onPress={handleSubmit}>
              Change Password
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}

const mapStateToProps = state => {
  const { primaryTextColor, backgroundColor, purpleTheme } = state.theme;
  return { primaryTextColor, backgroundColor, purpleTheme };
};

export default connect(mapStateToProps)(ChangePassword);
