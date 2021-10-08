import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

type Parameters = {
  method?: string;
  headers?: {
    Authorization: string;
  };
};

type Response = {
  data: null | any;
  error: null | boolean;
  loading: boolean;
};

function useApi(requestUrl: string, parameters: Parameters = {}) {
  const [response, setResponse] = useState({
    data: null,
    error: null,
    loading: true,
  } as Response);

  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setResponse({
      data: null,
      error: null,
      loading: true,
    });

    try {
      getAccessTokenSilently().then(async (token) => {
        if (parameters.headers) {
          parameters.headers.Authorization = `Bearer ${token}`;
        } else {
          parameters.headers = {
            Authorization: `Bearer ${token}`,
          };
        }

        const response = await fetch(baseUrl + requestUrl, parameters);
        const json = await response.json();

        console.log("RESULT:", json);
        setResponse({
          data: json,
          error: false,
          loading: false,
        });
      });
    } catch (e) {
      console.error("erri>>>", e);
      setResponse({
        data: {},
        error: false,
        loading: false,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return response;
}

export default useApi;
