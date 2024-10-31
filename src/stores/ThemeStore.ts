import type { ThemeState } from "@/models/ThemeState";
import { defineStore } from "pinia";

export const useThemeStore = defineStore({
    id:'theme',
    state: (): ThemeState =>({
        isDark: false,
        mode: 'Light Mode'
    }),
    actions: {
        changeTheme() {
            this.isDark = !this.isDark
            this.mode = this.mode === 'Light Mode' ? 'Dark Mode': 'Light Mode'
        }
    }
})