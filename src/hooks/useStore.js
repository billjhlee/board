import store from "store";

export default function useStore(storage_key, key) {
  function readOptions() {
    return store.get(storage_key) || {};
  }

  function getLastValue() {
    const options = readOptions();
    return options[key] || "";
  }

  function setLastValue(value) {
    const options = readOptions();
    options[key] = value;
    store.set(storage_key, options);
  }

  return [getLastValue, setLastValue];
}
