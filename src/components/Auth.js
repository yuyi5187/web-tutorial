import React from 'react';
//import KakaoLogin from 'LoginToken';

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  return (
    <div>
      "Dd"
    </div>
  );

};

export default Auth;