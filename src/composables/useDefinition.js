import { ref } from "vue";
import axios from "axios";

const definitions = ref([]);

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
});

const getRandomDefinition = async () => {
  const response = await api.get();
  if (response.status === 200) {
    definitions.value = [response.data.slip];
  }
};
export const useDefinition = () => {
  getRandomDefinition();
  const search = async (searchItem) => {
    const response = await api.get(`search/${searchItem}`);

    if (response.status === 200) {
      definitions.value = response.data.slips;
    }
  };
  return { definitions, search };
};
