var translations = {
    en: {
      error_unexpected_title: "Oops... it looks like an unexpected error occurred",
      error_unexpected_summary: "An exception has been thrown during processing: {{ error_msg }}",
      verifying_title: "Account Verification",
      verifying_summary: "Please wait while we verify your email.",
      expired_title: "Couldn't Verify Account",
      expired_summary: "It appears your verification email link has expired.",
      expired_tip: "Not to worry, we can send the link again.",
      expired_btn: "Resend Verification Email",
      expired_resend: "Resend in {{seconds}} second(s)",
      sent_title: "Please Verify Your Email",
      sent_summary: "You need to verify your email to continue. If you don't see the email, check your spam folder.",
      sent_tip: "Not to worry, we can send the link again.",
      sent_btn: "Resend Verification Email",
      sent_resend: "Resend in {{seconds}} second(s)",
      verified_title: "Account Verified!",
      verified_summary: "Your account has been verified. You can continue using the application.",
      verified_tip: "You can continue personalizing from your user profile account.",
      verified_btn: "Open the App",
    },
    es: {
      greeting: "¡Hola!",
      goodbye: "¡Adiós!"
    }
  };


  function translate(key, language) {
    var translation = translations[language];
    if (!translation) {
      return key;
    }
  
    var translatedText = translation[key];
    if (!translatedText) {
      return key;
    }
  
    return translatedText;
  }
