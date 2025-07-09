import SearchBar from "./SearchBar";
import Word from "./Word";
import { useFetchDictionary } from "../Hooks/useFetchDictionary";
import Spinner from "./Spinner";

function Dictionary() {
  const { response, fetchData, loading } = useFetchDictionary();

  return (
    <main>
      <SearchBar onSearch={fetchData} />
      {loading ? <Spinner /> : <Word response={response} />}
    </main>
  );
}

export default Dictionary;
