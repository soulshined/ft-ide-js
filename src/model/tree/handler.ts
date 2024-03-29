class FTIDETreeBuilder {
    private options: IFTIDEOptions;
    private content: any[] = [];

    private cIndex = 0;
    private cDepth = 0;

    constructor(options: IFTIDEOptions) {
        this.options = options;
    }

    public generate(tree: { [key: string]: any }) {
        // @ts-ignore
        if (typeof tree !== 'object' && tree.constructor !== Object)
            throw new Error('1st Argument expecting an object of kvps');

        const nav = new ElementBuilder('div')
            .addClass('explorer', this.options.explorerStyle)
            .append(this.createTree(tree).addClass('tree'));

        return {
            html: nav.build(),
            content: this.content
        }
    }

    private createTree(tree) {
        const ul = new ElementBuilder('ul');

        for (const [key, value] of Object.entries(tree)) {
            if (key.trim().length === 0) continue;

            if (typeof value === 'object' && value.constructor === Object) {
                const li = this.createItem(key, true);
                this.cDepth++;
                let child = this.createTree(value);
                if (child.build().firstChild) li.append(child);
                ul.append(li);
            }
            else {
                ul.append(this.createItem(key));
                this.content.push(value);
            }
        }

        this.cDepth--;
        return ul;
    }

    private createItem(content, isFolder: boolean = false) {
        const li = new ElementBuilder('li')
            .addClass(isFolder ? 'folder' : 'item')
            .styles(`padding: 0; padding-top: 1px; padding-bottom: 1px; padding-left: ${this.cDepth * 15}px;`)
            .append(new ElementBuilder('span').innerText(content).styles('pointer-events: none; vertical-align: super;'))

        if (this.options.expandFolders && isFolder) li.addClass('open');
        if (!isFolder) li.attr('data-ft-ide-id', (this.cIndex++).toString());

        return li;
    }
}