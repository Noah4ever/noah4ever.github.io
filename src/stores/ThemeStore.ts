import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Theme = "light" | "dark";

interface IThemeStore {
  theme: Theme;
}

export const useThemeStore = create(
  persist<IThemeStore>(
    () => ({
      theme: "light",
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
