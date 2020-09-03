export default async function fetchFromContentful(stuff) {
  return fetch("stuff/" + stuff).then((res) => res.json());
}

export function getItemsArray(response, stuff) {
  return response.data[stuff + "Collection"].items;
}
