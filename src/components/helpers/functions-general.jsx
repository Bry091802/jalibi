import React from "react";

const urlJollibeeLocal = "http://localhost/vite-jollibee"; //from thunder client
export const imgPath = "http://localhost/vite-jollibee/public/img";

// ONLINE DEV and LOCAL hris
export const devApiUrl = `${urlJollibeeLocal}/rest`;
export const devNavUrl = ""; //removed /v2
export const devBaseImgUrl = `${imgPath}`;
export const devBaseUrl = `${urlJollibeeLocal}`;

// dev key from thunder client
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

export const getUrlParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};

// storage after login
export function setStorageRoute(jwt) {
  localStorage.setItem("jollibeetoken", JSON.stringify({ token: jwt }));
}

export const fetchFormData = (url, fd = {}) => {
  console.log(fd);
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};
