import { Observable } from "rxjs";

export const addRxPlugin = () => {};
export const createRxDatabase = async () => {
  const todosCollection = {
    $: new Observable((subscriber) => {
      subscriber.next([]);
    }),
    find: () => ({
      $: new Observable((subscriber) => {
        subscriber.next([]);
      }),
      exec: async () => [],
    }),
    insert: async (data) => data,
    remove: async () => {},
  };

  return {
    addCollections: async (collections) => {
      return {
        todos: todosCollection,
      };
    },
    todos: todosCollection,
  };
};