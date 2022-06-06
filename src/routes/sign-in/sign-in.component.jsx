import React from "react";
import { signInWithGooglePopup } from "../../utils/fireabase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      SignIn Page <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
