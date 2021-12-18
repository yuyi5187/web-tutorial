import react from 'react';
import axios from 'axios';

const KakaoLogin = (code) => {
  return (
    axios({
      method: "GET",
      url: `http://3.35.208.142/oauth/callback/kakao?code=${code}`,
    })
      .then((res) => {
        const ACCESS_TOKEN = res.data.accessToken;
      })
  );
}

export default LoginToken;