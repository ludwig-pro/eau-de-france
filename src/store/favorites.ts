import { store$, type Commune } from "./index";

export const addFavorite = (commune: Omit<Commune, "addedAt">) => {
  store$.favorites.push({
    ...commune,
    addedAt: Date.now(),
  });
};

export const removeFavorite = (insee: string) => {
  const index = store$.favorites.peek().findIndex((c) => c.insee === insee);
  if (index !== -1) {
    store$.favorites.splice(index, 1);
  }
};

export const isFavorite = (insee: string): boolean => {
  return store$.favorites.peek().some((c) => c.insee === insee);
};

export const getFavorite = (insee: string): Commune | undefined => {
  return store$.favorites.peek().find((c) => c.insee === insee);
};
