import { API_URL, Method, Route } from '../const/const';

const getData = async () => {
  const response = await fetch(`${API_URL}${Route.GET_DATA}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
};

const sendData = async (formData) => {
  const response = await fetch(`${API_URL}${Route.SEND_DATA}`, {
    method: Method.POST,
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
};

export { getData, sendData };
