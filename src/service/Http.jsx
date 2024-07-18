import axios from "axios";

export const consumeService = async (payload, url, operation) => {
  console.log("Consuming service ...", {
    payload,
    url,
    operation,
  });
  const headers = {
    "Content-Type": "application/json",
  };
  let axiosParams;
  if (payload) {
    axiosParams = {
      data: JSON.stringify(payload),
      headers: headers,
      method: operation,
      url: url,
    };
  } else {
    axiosParams = {
      headers: headers,
      method: operation,
      url: url,
    };
  }
  return axios(axiosParams);
};
