class IDE {
    private ide: HTMLElement;
    private options: IFTIDEOptions;
    private mobileNav: HTMLElement;
    private breadcrumbDiv: HTMLElement;
    private contentDiv: HTMLElement;
    private content: any;

    constructor(elementId: string, tree, options) {
        this.ide = document.getElementById(elementId);
        if (this.ide === null)
            throw new Error('1st Argument expecting a valid element ID');

        if (!this.ide.classList.contains('ft-ide'))
            this.ide.classList.add('ft-ide');

        this.options = new FTIDEOptions(options);
        if (this.options.isDebug) {
            console.log(`FTIDEOptions for #${elementId}:`);
            console.table(this.options);
        }
        this.ide.setAttribute('data-ft-ide-theme', this.options.theme);

        const _tree = new FTIDETreeBuilder(this.options)
            .generate(tree);

        this.writeToDOM(_tree);
        this.writeStylesToIDE();
        this.registerEvents();
    }


    private writeToDOM(tree) {
        this.ide.innerHTML = this.getBranding();

        //First clone explorer tree to port over for a mobile nav
        const mobileNav = ElementBuilder.from(tree.html)
            .addClass('mobile');
        this.mobileNav = mobileNav.build();
        this.ide.appendChild(mobileNav.build());

        //prep the content-wrapper
        const contentWrapper = new ElementBuilder('div').addClass('content-wrapper');

        if (this.options.showBreadcrumbs !== 'never') {
            const breadcrumbDiv = new ElementBuilder('ul').addClass('ft-ide-breadcrumb');

            if (this.options.showBreadcrumbs === 'always')
                breadcrumbDiv.styles('display: flex !important');

            this.breadcrumbDiv = breadcrumbDiv.build();
            contentWrapper.append(breadcrumbDiv);
        }

        const contentDiv = new ElementBuilder('code')
            .addClass('content')
            .styles('line-height: 1.4; user-select: none !important;');

        const preDiv = new ElementBuilder('pre').append(contentDiv);

        if (this.options.syntaxHighlighter.highlight)
            contentDiv.addClass(...this.options.syntaxHighlighter.class.split(" "));

        contentWrapper.append(preDiv);
        this.contentDiv = contentDiv.build();

        //prep mobile friendly explorer
        const mobileactions = new ElementBuilder('div').addClass('mobile-actions');

        const maExplorerBtn = new ElementBuilder('button')
            .innerHTML('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"><path d="M 5 1 C 3.9 1 3 1.9 3 3 L 3 17 L 5 17 L 5 3 L 17 3 L 17 1 L 5 1 z M 9 5 C 7.9 5 7 5.9 7 7 L 7 21 C 7 22.1 7.9 23 9 23 L 20 23 C 21.1 23 22 22.1 22 21 L 22 10 L 17 5 L 9 5 z M 9 7 L 16 7 L 16 11 L 20 11 L 20 21 L 9 21 L 9 7 z M 11 13 L 11 15 L 18 15 L 18 13 L 11 13 z M 11 17 L 11 19 L 18 19 L 18 17 L 11 17 z"></path></svg>')
            .attr('title', 'Explorer');
        maExplorerBtn.build().onclick = this.toggleMobileExplorer.bind(this);

        mobileactions.append(maExplorerBtn);

        if (this.options.showCopyToClipboard) {
            const maCopyBtn = new ElementBuilder('button')
                .innerHTML('<svg viewBox="0 0 14 16" width="17px" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>')
                .attr('title', 'Copy To Clipboard');
            maCopyBtn.build().onclick = this.handleCopyToClipboard.bind(this);

            let copyBtn = ElementBuilder.from(maCopyBtn).id('ftide__btn-copy');
            copyBtn.build().onclick = this.handleCopyToClipboard.bind(this);

            this.ide.appendChild(copyBtn.build());
            mobileactions.append(maCopyBtn);
        }

        //append all elements to IDE
        this.ide.appendChild(tree.html);
        this.ide.appendChild(mobileactions.build());
        this.ide.appendChild(contentWrapper.build());

        this.content = tree.content;

        if (this.content.length > 0) {
            let contentid = 0;

            if (this.options.rootPath !== null) {
                let paths = this.options.rootPath.split('/').filter(f => f.trim().length !== 0);

                let node = tree.html.children[0];
                let matchedNode = null;

                [...node.children].filter(f => f.classList.contains('folder') || f.classList.contains('item')).forEach(child => {
                    if (child.innerText === paths[0] && matchedNode == null) {
                        matchedNode = child;
                        paths.shift();
                    }
                });

                if (matchedNode != null) {
                    if (paths.length == 0 && matchedNode.classList.contains('item')) {
                        contentid = parseInt(matchedNode.getAttribute('data-ft-ide-id'));
                    }

                    if (paths.length > 0 && matchedNode.classList.contains('folder')) {
                        let canContinue;
                        do {
                            canContinue = false;
                            if (matchedNode.nextSibling && matchedNode.nextSibling.tagName == 'UL' && matchedNode.nextSibling.hasChildNodes()) {
                                [...matchedNode.nextSibling.children].filter(f => f.classList.contains('folder') || f.classList.contains('item')).forEach(child => {
                                    if (child.innerText === paths[0]) {
                                        if (paths.length == 1 && child.classList.contains('item')) {
                                            contentid = parseInt(child.getAttribute('data-ft-ide-id'));
                                        }
                                        else {
                                            matchedNode = child;
                                            paths.shift();
                                            canContinue = true;
                                        }
                                    }
                                });
                            }
                        } while (canContinue);
                    }
                    else if (matchedNode.classList.contains('item'))
                        contentid = parseInt(matchedNode.getAttribute('data-ft-ide-id'));
                }
            }

            const target = tree.html.querySelector(`.tree li[data-ft-ide-id="${contentid}"]`);
            target.classList.add('active');
            this.setContent(this.content[contentid]);
            this.updateBreadcrumbs(target);
        }
    }

    private getBranding() {
        return `<!--
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$    FT-IDE CREATED BY github.com/soulshined    $$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
-->`;
    }

    private toggleMobileExplorer() {
        this.mobileNav.classList.toggle('show');
    }

    private handleCopyToClipboard() {
        if (navigator.permissions) {
            navigator.clipboard.writeText(this.contentDiv.textContent).then(function () {
                /* clipboard successfully set */
                this.showToastr('Copied to Clipboard');
            }.bind(this), function () {
                /* clipboard write failed */
                this.showToastr('Error copying');
            }.bind(this));
        }
        else {
            //fallback
            const ta = document.createElement("textarea");
            ta.value = this.contentDiv.textContent;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            this.showToastr("Copied to Clipboard");
        }
    }

    private registerEvents() {
        const navs = document.querySelectorAll(`#${this.ide.id} div.explorer`);

        navs.forEach(nav => {
            nav.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                // @ts-ignore
                if (target && target.nodeName === 'LI') {
                    //scroll to element
                    let padding = +target.style.paddingLeft.substring(0, target.style.paddingLeft.length - 2);
                    nav.scrollTo(padding - 10, nav.scrollTop);

                    if (!target.classList.contains('folder')) {
                        //not a folder list item, set the content and apply options, if any
                        this.setContent(this.content[target.getAttribute('data-ft-ide-id')]);

                        if (this.options.syntaxHighlighter.highlight === true) {
                            let ext = target.innerText.substring(target.innerText.lastIndexOf('.') + 1);
                            this.contentDiv.className = `content ${this.options.syntaxHighlighter.class} lang-${ext} language-${ext}`;
                            // @ts-ignore
                            if (this.options.syntaxHighlighter.class.includes('prettyprint')) PR.prettyPrint();
                        }

                        //make LI active item
                        [...document.querySelectorAll(`#${this.ide.id} div.explorer li`)].map(m => m.classList.remove('active'));
                        target.classList.add('active');

                        //hide the mobile friendly nav
                        this.mobileNav.classList.remove('show');
                    }
                    else {
                        //this is a folder LI
                        target.classList.toggle('open');
                    }

                    //apply path to breadcrumb
                    this.updateBreadcrumbs(target);
                }
            })
        });
    }

    private updateBreadcrumbs(element: HTMLElement) {
        if (element === null) return;
        if (element.classList.contains('folder')) return;

        if (this.options.showBreadcrumbs !== 'never') {
            let lis: ElementBuilder[] = [];
            let node = element.parentNode as HTMLElement;
            while (!node.classList.contains('tree')) {
                const parent = node.parentNode;
                lis.push(new ElementBuilder('li').innerText(parent.firstChild.textContent));
                // @ts-ignore
                node = parent.closest('ul') as HTMLElement;
            }

            if (lis.length >= this.options.maxBreadcrumbs) {
                lis = lis.slice(-Math.abs(this.options.maxBreadcrumbs));
                lis.unshift(new ElementBuilder('li').innerText('...'));
            }

            this.breadcrumbDiv.innerHTML = `<li></li>` + lis.reverse().map(m => m.build().outerHTML).join('') + `<li>${element.firstChild.textContent}</li>`;
        }
    }

    private writeStylesToIDE() {

        //font loader
        if (this.options.ideFontFamily !== null || this.options.codeFontFamily !== null) {
            let fonts = [this.options.codeFontFamily, this.options.ideFontFamily].filter(f => f !== null);

            // @ts-ignore
            WebFont.load({
                google: {
                    families: fonts
                }
            })

            this.ide.style.fontFamily = this.options.ideFontFamily;
            this.contentDiv.style.fontFamily = this.options.codeFontFamily;
        }
    }

    private showToastr(msg: string) {
        const toastr = new ElementBuilder('div').addClass('toastr').innerHTML(msg);
        this.ide.appendChild(toastr.build());
        setTimeout(() => {
            this.ide.removeChild(toastr.build());
        }, 2500);
    }

    private setContent(content: string) {
        this.contentDiv.textContent = `${content}`;
    }

}