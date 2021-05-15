type IElement = ElementBuilder | HTMLElement;

class ElementBuilder {
    private node: HTMLElement;

    constructor(tagName?: string) {
        if (tagName)
            this.node = document.createElement(tagName.toUpperCase());
    }

    innerHTML(html: string) {
        this.node.innerHTML = html;
        return this;
    }

    innerText(text: string) {
        this.node.innerText = text;
        return this;
    }

    styles(styles: string) {
        this.node.style.cssText += `;${styles}`;
        return this;
    }

    id(value: string) {
        this.node.id = value;
        return this;
    }

    addClass(...args: string[]) {
        args.forEach(arg => {
            if (!this.node.classList.contains(arg)) this.node.classList.add(arg);
        })
        return this;
    }

    attr(attr: string, val: string) {
        this.node.setAttribute(attr, val);
        return this;
    }

    append(...child: (IElement | Text)[]) {
        child.forEach(element => {
            this.node.appendChild((element instanceof ElementBuilder) ? element.build() : element);
        });
        return this;
    }

    public static from(element: IElement, includeChildren = true) {
        const builder = new ElementBuilder('');
        builder.node = (element instanceof ElementBuilder)
            ? element.node.cloneNode(includeChildren) as HTMLElement
            : element.cloneNode(includeChildren) as HTMLElement;
        return builder;
    }

    build(): HTMLElement {
        return this.node;
    }
}

