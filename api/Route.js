import Axios from "./Axios";

export const SearchRoute = async (start, end) => {
  await Axios.get(
    `http://172.20.10.2:8000/api/subway/search-way/${start}/${end}`
  )
    .then((response) => {
      const cost = response.data.cost;
      const dist = response.data.dist;
      const time = response.data.time;
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};
