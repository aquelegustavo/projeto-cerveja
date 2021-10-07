import { useAuth0 } from "@auth0/auth0-react";

type Parameters = {
  method?: string;
  headers?: {
    Authorization: string;
  };
};

export default async function useApi(
  requestUrl: string,
  parameters: Parameters = {}
) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const { getAccessTokenSilently } = useAuth0();

  const token = await getAccessTokenSilently();

  if (parameters.headers) {
    parameters.headers.Authorization = `Bearer ${token}`;
  } else {
    parameters.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  new Promise<void>((resolve, reject) => {
    fetch(baseUrl + requestUrl, parameters)
      .then((res) => res.json())
      .then((result) => {
        console.log("API result:", result);
        resolve(result);
      })
      .catch(function (error) {
        console.log("Erro no procedimento fetch: " + error);
        reject(error);
      });
  });
}
