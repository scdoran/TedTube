export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const parseResponse = response => {
  if (response.status === 500 || response.status === 404) {
    throw Error(response.message);
  }
  if (!response.data) return [];
  let data = response.data;
  return data;
};
