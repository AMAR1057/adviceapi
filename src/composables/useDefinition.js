import { ref } from "vue";
import axios from "axios";

const definitions = ref([]);

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});
const getRandomDefinition = async () => {
  const response = await api.get("hello");
  if (response.status === 200) {
    definitions.value = [
      response.data[0].meanings[0].definitions[0].definition,
    ];
  }
};
export const useDefinition = () => {
  getRandomDefinition();
  const search = async (searchItem) => {
    const response = await api.get(searchItem);
    if (response.status === 200) {
      definitions.value = response.data.slip;
    }
  };
  return { definitions, search };
};
