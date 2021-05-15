interface IFTIDEOptions {
    isDebug?: boolean;
    codeFontFamily?: string;
    expandFolders?: boolean;
    explorerStyle?: 'material' | 'compact';
    ideFontFamily?: string;
    maxBreadcrumbs?: number;
    rootPath?: string;
    showBreadcrumbs?: 'always' | 'oncollapse' | 'never';
    showCopyToClipboard?: boolean;
    syntaxHighlighter?: {
        highlight?: boolean;
        class?: string;
    },
    theme?: 'default' | 'dark';
};

class FTIDEOptions implements IFTIDEOptions {
    public isDebug: boolean = false;
    public codeFontFamily = null;
    public ideFontFamily = null;
    public explorerStyle: 'material' | 'compact' = 'material';
    public expandFolders: boolean = false;
    public maxBreadcrumbs: number = 4;
    public showBreadcrumbs: 'always' | 'oncollapse' | 'never' = "oncollapse";
    public showCopyToClipboard: boolean = false;
    public syntaxHighlighter = {
        highlight: false,
        class: 'prettyprint'
    };
    public rootPath = null;
    public theme: 'default' | 'dark' = 'default';

    constructor(options?: { [key: string]: any }) {
        if (!options) return;

        this.isDebug = this.define(options.isDebug, true, [true, false], true);
        this.codeFontFamily = options.codeFontFamily ?? null;
        this.expandFolders = this.define(options.expandFolders, true, [true, false], true);
        this.explorerStyle = this.define(options.explorerStyle, 'material', ['material', 'compact']);
        this.ideFontFamily = options.ideFontFamily ?? null;
        if (options.maxBreadcrumbs)
            this.maxBreadcrumbs = options.maxBreadcrumbs;
        this.rootPath = options.rootPath ?? null;
        this.showBreadcrumbs = this.define(options.showBreadcrumbs, 'oncollapse', ['always', 'oncollapse', 'never']);
        this.showCopyToClipboard = this.define(options.showCopyToClipboard, true, [true, false], true);
        this.syntaxHighlighter.highlight = this.define(options.syntaxHighlighter?.highlight, true, [true, false], true);
        this.syntaxHighlighter.class = this.define(options.syntaxHighlighter?.class, 'prettyprint', [], true);
        this.theme = this.define(options.theme, 'default', ['default', 'dark']);
    }

    private format(val) {
        if (typeof val === 'boolean' && val.constructor == Boolean)
            return val;
        return val.toString().trim().toLowerCase();
    }

    private define(val, defaultOption, allowedOptions = [], isStrict = false) {
        if (val === undefined || val === null)
            return defaultOption;

        if (allowedOptions.length > 0) {
            if (!allowedOptions.includes(this.format(val))) {
                if (this.isDebug)
                    console.warn(`[FTIDEOptions] invalid property value '${val}'; expecting one of these values: ${allowedOptions.join()}`);
                return defaultOption;
            }
        }

        return isStrict === true ? val : this.format(val);
    }
}