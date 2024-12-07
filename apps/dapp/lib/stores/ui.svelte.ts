import { browser } from "$app/environment";
import {
    getContext as getSvelteContext,
    setContext as setSvelteContext
} from "svelte";

type SchemaKeys = |
    'accentColor' |
    'bgColor' |
    'textColor' |
    'hintColor' |
    'linkColor' |
    'buttonBgColor' |
    'buttonTextColor' |
    'secondaryBgColor' |
    'headerBgColor' |
    'bottomBarBgColor' |
    'sectionBgColor' |
    'sectionHeaderTextColor' |
    'sectionSeparatorColor' |
    'subtitleTextColor' |
    'destructiveTextColor';

type Theme = Record<SchemaKeys, `#${string}`>;

type Schema = 'dark' | 'light' | 'auto';

interface iUI {
    schema: Schema;
    appSchema: Telegram['WebApp']['colorScheme']
    themes: ({
        name: string;
        light: Theme;
        dark: Theme;
    })[];
    theme: string | 'Default';
}

class UI {
    #_ = $state<iUI>({
        schema: 'dark',
        theme: 'Thodle',
        appSchema: 'dark',
        themes: [
            {
                name: 'Thodle',
                dark: {
                    accentColor: '#6ab3f2',
                    bgColor: '#17212b',
                    textColor: '#f5f5f5',
                    hintColor: '#708599',
                    linkColor: '#6ab3f3',
                    buttonBgColor: '#5289c1',
                    buttonTextColor: '#ffffff',
                    secondaryBgColor: '#232e3c',
                    headerBgColor: '#17212b',
                    bottomBarBgColor: '#17212b',
                    sectionBgColor: '#17212b',
                    sectionHeaderTextColor: '#6ab3f2',
                    sectionSeparatorColor: '#111921',
                    subtitleTextColor: '#708599',
                    destructiveTextColor: '#ec3942'
                },
                light: {
                    accentColor: '#168dcd',
                    bgColor: '#ffffff',
                    textColor: '#000000',
                    hintColor: '#999999',
                    linkColor: '#168dcd',
                    buttonBgColor: '#40a7e3',
                    buttonTextColor: '#ffffff',
                    secondaryBgColor: '#f1f1f1',
                    headerBgColor: '#ffffff',
                    bottomBarBgColor: '#ffffff',
                    sectionBgColor: '#ffffff',
                    sectionHeaderTextColor: '#168dcd',
                    sectionSeparatorColor: '#e7e7e7',
                    subtitleTextColor: '#999999',
                    destructiveTextColor: '#d14e4e'
                },
            },
            {
                name: 'Mint',
                dark: {
                    accentColor: '#2F5A5A',
                    bgColor: '#1E1E1E',
                    textColor: '#f5f5f5',
                    hintColor: '#AAAAAA',
                    linkColor: '#6ab3f3',
                    buttonBgColor: '#2F5A5A',
                    buttonTextColor: '#f5f5f5',
                    secondaryBgColor: '#121212',
                    headerBgColor: '#1E1E1E',
                    bottomBarBgColor: '#1E1E1E',
                    sectionBgColor: '#1E1E1E',
                    sectionHeaderTextColor: '#2F5A5A',
                    sectionSeparatorColor: '#052F20',
                    subtitleTextColor: '#708599',
                    destructiveTextColor: '#ec3942'
                },
                light: {
                    accentColor: '#2F5A5A',
                    bgColor: '#D4F2E3',
                    textColor: '#000000',
                    hintColor: '#999999',
                    linkColor: '#168dcd',
                    buttonBgColor: '#2F5A5A',
                    buttonTextColor: '#ffffff',
                    secondaryBgColor: '#F6FDFA',
                    headerBgColor: '#D4F2E3',
                    bottomBarBgColor: '#E7F6EF',
                    sectionBgColor: '#E7F6EF',
                    sectionHeaderTextColor: '#2F5A5A',
                    sectionSeparatorColor: '#B2CEC0',
                    subtitleTextColor: '#999999',
                    destructiveTextColor: '#d14e4e'
                },
            }
        ]
    });

    constructor() {
        if (browser) {
            this.#setProperties([]);
        }

        $effect.root(() => {
            $effect(() => {
                this.#_;
                this.updateVars()
            })
        })
    }

    updateVars = () => {
        const theme = this.#_.themes.find(schema => schema.name == this.#_.theme);

        if (theme) {
            const schema = this.#_.schema === 'auto' ? this.#_.appSchema : this.#_.schema;

            document.documentElement.style.setProperty('--bg-color', theme[schema].bgColor);
            document.documentElement.style.setProperty('--accent-color', theme[schema].accentColor);
            document.documentElement.style.setProperty('--text-color', theme[schema].textColor);
            document.documentElement.style.setProperty('--button-bg-color', theme[schema].buttonBgColor);
            document.documentElement.style.setProperty('--button-text-color', theme[schema].buttonTextColor);
            document.documentElement.style.setProperty('--secondary-bg-color', theme[schema].secondaryBgColor);
            document.documentElement.style.setProperty('--section-bg-color', theme[schema].sectionBgColor);
            document.documentElement.style.setProperty('--section-separator-color', theme[schema].sectionSeparatorColor);
            document.documentElement.style.setProperty('--header-bg-color', theme[schema].headerBgColor);
            document.documentElement.style.setProperty('--bottom-bar-bg-color', theme[schema].bottomBarBgColor);
            document.documentElement.style.setProperty('--section-header-text-color', theme[schema].sectionHeaderTextColor);
            document.documentElement.style.setProperty('--subtitle-text-color', theme[schema].subtitleTextColor);
            document.documentElement.style.setProperty('--hint-color', theme[schema].hintColor);
            this.onupdate(theme[schema]);
        }
        else {
            document.documentElement.style.setProperty('--hint-color', 'var(--tg-theme-hint-color)');
            document.documentElement.style.setProperty('--subtitle-text-color', 'var(--tg-theme-subtitle-text-color)');
            document.documentElement.style.setProperty('--bottom-bar-bg-color', 'var(--tg-theme-bottom-bar-bg-color)');
            document.documentElement.style.setProperty('--section-header-text-color', 'var(--tg-theme-section-header-text-color)');
            document.documentElement.style.setProperty('--header-bg-color', 'var(--tg-theme-header-bg-color)');
            document.documentElement.style.setProperty('--bg-color', 'var(--tg-theme-bg-color)');
            document.documentElement.style.setProperty('--accent-color', 'var(--tg-theme-accent-text-color)');
            document.documentElement.style.setProperty('--text-color', 'var(--tg-theme-text-color)');
            document.documentElement.style.setProperty('--button-bg-color', 'var(--tg-theme-button-color)');
            document.documentElement.style.setProperty('--button-text-color', 'var(--tg-theme-button-text-color)');
            document.documentElement.style.setProperty('--secondary-bg-color', 'var(--tg-theme-secondary-bg-color)');
            document.documentElement.style.setProperty('--section-bg-color', 'var(--tg-theme-section-bg-color)');
            document.documentElement.style.setProperty('--section-separator-color', 'var(--tg-theme-section-separator-color)');
            this.onupdate();
        }
    }

    onupdate = (theme?: Theme) => {}

    setTheme = (theme: string) => {
        this.#_.theme = theme;
    }

    get allThemes() {
        return this.#_.themes.map(theme => theme.name);
    }

    setSchema = (schema: Schema) => {
        this.#_.schema = schema;
    }
    setAppSchema = (schema: Telegram['WebApp']['colorScheme']) => {
        this.#_.appSchema = schema;
    }

    #setProperties = (omit: (keyof iUI)[]) => {
        for(const key in this.#_) {
            if(!omit.includes(key as keyof iUI)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this.#_[key];
                    }
                })
            }
        }
    }
}


export const
    UI_KEY = Symbol('UI_KEY'),
    setContext = () => setSvelteContext(UI_KEY, new UI() as UI & iUI),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(UI_KEY);
