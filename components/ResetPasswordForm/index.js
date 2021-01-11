import React from "react";
import { connect } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import { resetPasswordToken, retryToken, changePassword } from "../../store/actions";

function ResetPasswordForm({
  fetching,
  serverErrors,
  tokenSentToEmail,
  loggedIn,
  resetPassToken,
  retryResetToken,
  changePass
}) {
  return loggedIn ? (
    <ChangePassword fetching={fetching} serverErrors={serverErrors} changePass={changePass} />
  ) : (
    <ForgotPassword
      fetching={fetching}
      tokenSentToEmail={tokenSentToEmail}
      serverErrors={serverErrors}
      resetPassToken={resetPassToken}
      retryResetToken={retryResetToken}
    />
  );
}

const mapStateToProps = state => {
  const { fetching, tokenSentToEmail, errors } = state.app;
  const { loggedIn } = state.currentUser;
  return { fetching, tokenSentToEmail, loggedIn, serverErrors: errors };
};

const mapDispatchToProps = dispatch => ({
  resetPassToken: email => dispatch(resetPasswordToken(email)),
  retryResetToken: () => dispatch(retryToken()),
  changePass: passwordData => dispatch(changePassword(passwordData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
