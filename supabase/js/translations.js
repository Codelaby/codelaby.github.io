var translations = {
    en: {
        error_unexpected_title : "Oops... looks like an unexpected error occurred",
        error_unexpected_summary : "An exception has been throw during process {{ error_msg }}",
        verifing_title: "Account verification",
        verifing_summary: "Please wait while you verify your email.",
        expired_title: "Couldn't veify account",
        expired_summary: "Apparently your verification email link has expired.",
        expired_tip: "Not to worry, we can send the link again.",
        expired_btn: "Resend verification Email",
        expired_resend: "Resend in {{seconds}} second(s)",
        sended_title: "Please verify your email",
        sended_summary: "You need to verify your email to continue. If you don't see it, you may need to check your spam folder.",
        sended_tip: "Not to worry, we can send the link again.",
        sended_btn: "Resend verification Email",
        sended_resend: "Resend in {{seconds}} second(s)",
        verified_title: "Account verificated!",
        verified_summary: "You account has been verified. You can continue using the application.",
        verified_tip: "You can continue personalized from your user profile account.",
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
