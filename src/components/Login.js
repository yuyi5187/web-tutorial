import React from 'react';

const CLIENT_ID = "1234565432345432"; //내 REST_API 키
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback"
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Login = () => {

  return (
    <a href={KAKAO_AUTH_URL}>카카오계정으로 로그인</a>
  );
}

export default Login;