import { observable } from "@legendapp/state";
import { syncObservable } from "@legendapp/state/sync";
import { ObservablePersistMMKV } from "@legendapp/state/persist-plugins/mmkv";

// Types
export interface Commune {
  insee: string;
  name: string;
  addedAt: number;
}

interface AppStore {
  favorites: Commune[];
}

// Store observable
export const store$ = observable<AppStore>({
  favorites: [],
});

// Persistence avec MMKV
syncObservable(store$, {
  persist: {
    name: "eau-de-france",
    plugin: ObservablePersistMMKV,
  },
});
