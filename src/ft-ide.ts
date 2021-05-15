/*

  FT IDE Created by github.com/soulshined

  uses but not dependant on:
    - Web Font Loader v1.6.16
    - Prettyprint 1.0.0

*/

/// <reference path="./model/font-loader.ts"  />"
/// <reference path="./model/pretty-print.ts"  />"

/// <reference path="./model/options.ts" />
/// <reference path="./model/element.ts" />
/// <reference path="./model/tree/handler.ts" />
/// <reference path="./model/ide.ts" />

'use strict';
if (!HTMLElement.prototype.scrollTo) {
    // @ts-ignore
    HTMLElement.prototype.scrollTo = function (left, top) {
        this.scrollTop = top; this.scrollLeft = left;
    }
}
// @ts-ignore
if (typeof module !== "undefined" && module.exports) {
    // @ts-ignore
    module.exports = {
        FTIDE: IDE,
        FTIDEOptions
    };
}

if (typeof window !== "undefined") {
    // @ts-ignore
    window.FTIDE = IDE;
    // @ts-ignore
    window.FTIDEOptions = FTIDEOptions;
}

//apply ft-ide foundation css
//call window.onresize
(function () {
    const style = document.createElement('STYLE');
    // @ts-ignore
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`/*
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$    FT-IDE CREATED BY github.com/soulshined    $$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/:root{--bg-dark:#1e1e1e;--bg-dark-lighter:rgb(37,37,38);--bg-default:white;--bg-default-lighter:rgb(240,240,240)}.ft-ide{display:flex;position:relative;height:100%;border:1px solid #d3d3d3;flex:1;font-size:.9rem;background-color:#fff;user-select:none!important;-webkit-touch-callout:none!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe WPC","Segoe UI",HelveticaNeue-Light,Ubuntu,"Droid Sans",sans-serif;color:#616161}.ft-ide[data-ft-ide-theme=dark]{color:#ccc;border-color:#444;background-color:var(--bg-dark)}.ft-ide *{box-sizing:border-box}.ft-ide .explorer{display:flex;min-width:150px;overflow-y:auto;background-color:var(--bg-default-lighter)}.ft-ide .explorer.compact{font-size:.84em}.ft-ide[data-ft-ide-size=desktop] .explorer{max-width:250px}.ft-ide[data-ft-ide-theme=dark] .explorer,.ft-ide[data-ft-ide-theme=dark] .mobile-actions{background-color:var(--bg-dark-lighter)}.ft-ide .explorer.mobile{display:none;position:absolute;width:100%;height:100%}.ft-ide .explorer.mobile.show{display:block}.ft-ide .explorer ul{display:block;min-width:100%;padding:0;margin:0}.ft-ide .explorer ul.tree li{list-style:none;padding:2px;cursor:pointer;text-indent:8px;word-break:keep-all;white-space:nowrap}.ft-ide .explorer ul.tree li>span{pointer-events:none;vertical-align:middle}.ft-ide .explorer ul li.folder{text-indent:8px}.ft-ide .explorer.compact ul li.folder{text-indent:0}.ft-ide .explorer.compact ul li{text-indent:11px}.ft-ide .explorer li.active{background-color:#e4e6f1}.ft-ide[data-ft-ide-theme=dark] .explorer li.active{background-color:#37373d}.ft-ide .explorer li:hover{background-color:#e8e8e8}.ft-ide[data-ft-ide-theme=dark] .explorer li:hover{background-color:#2a2d2e}.ft-ide .explorer li.folder::before{padding-right:8px;content:url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="18px" height="18px" fill="%23C8C8C8"><path d="M22,6H12l-2-2H2v16h20V6z"></path></svg>')}.ft-ide .explorer li.folder.open::before{content:url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="18px" height="18px" fill="%23C8C8C8"><path d="M22,6H12l-2-2H2v16h20V6z M20,18H4V8h16V18z"></path></svg>')}.ft-ide .explorer.compact li.folder::before{padding:5px;content:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' width='18px' height='18px'><path fill='%23C8C8C8' d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/></svg>")}.ft-ide .explorer.compact li.folder.open::before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18px" height="18px"><path fill="%23C8C8C8" d="M11 10H5.344L11 4.414V10z"/></svg>')}.ft-ide .explorer li.folder:not(.open)>ul{display:none}.ft-ide .mobile-actions{display:none;width:30px;background-color:var(--bg-default-lighter);flex-flow:column nowrap;align-items:center;padding:10px 0}.ft-ide #ftide__btn-copy,.ft-ide .mobile-actions button{cursor:pointer;background-color:unset;outline:unset;border:unset;transition:all .2s ease-in-out;fill:#9c9c9c}.ft-ide .mobile-actions button{margin-bottom:5px}.ft-ide #ftide__btn-copy:active,.ft-ide .mobile-actions button:active{transform:scale(.97)}.ft-ide .content-wrapper{display:flex;flex-flow:column nowrap;flex:1;overflow:auto;color:inherit}.ft-ide .content-wrapper pre{flex:1;width:100%;margin:0;padding:20px!important;overflow:auto;color:inherit}.ft-ide .content-wrapper pre code{line-height:1.4;color:inherit}.ft-ide .content-wrapper .ft-ide-breadcrumb{display:none;list-style:none;height:1.8rem;font-size:.76em;margin:0;padding:0 0 0 10px;background-color:var(--bg-default-lighter);overflow:hidden;color:inherit}.ft-ide .content-wrapper .ft-ide-breadcrumb li{display:flex;align-items:center;word-break:keep-all;white-space:nowrap}.ft-ide .content-wrapper .ft-ide-breadcrumb li:not(:last-child):after{content:'/';padding:0 5px}.ft-ide[data-ft-ide-theme=dark] .content-wrapper .ft-ide-breadcrumb{background-color:#37373d}.ft-ide #ftide__btn-copy:active,.ft-ide #ftide__btn-copy:hover,.ft-ide .mobile-actions button:active,.ft-ide .mobile-actions button:hover{fill:#6e6e6e}.ft-ide .toastr{display:block;position:absolute;right:0;background-color:#ebebeb;border-radius:0 0 0 5px;font-size:.7rem;padding:5px 10px;box-shadow:0 1px 2px #9b9b9b}.ft-ide[data-ft-ide-theme=dark] .toastr{background-color:#37373d;box-shadow:0 1px 4px #000}.ft-ide[data-ft-ide-size=mobile] .toastr{right:unset;border-radius:unset;left:5px;top:40px}.ft-ide #ftide__btn-copy{display:block;position:absolute;right:15px;top:0}.ft-ide pre::-webkit-scrollbar{width:12px;height:12px}.ft-ide pre::-webkit-scrollbar-track{background-color:unset;border-left:1px solid rgba(169,169,169,.25);border-top:1px solid rgba(169,169,169,.25)}.ft-ide[data-ft-ide-theme=dark] pre::-webkit-scrollbar-track{border-color:#323232}.ft-ide pre::-webkit-scrollbar-thumb{background-color:rgba(169,169,169,.3)}.ft-ide pre::-webkit-scrollbar-thumb:hover{background-color:rgba(169,169,169,.6)}.ft-ide .explorer::-webkit-scrollbar{width:12px;height:12px}.ft-ide .explorer::-webkit-scrollbar-track{background-color:unset}.ft-ide .explorer::-webkit-scrollbar-thumb{background-color:rgba(169,169,169,.17)}.ft-ide .explorer::-webkit-scrollbar-thumb:hover{background-color:rgba(169,169,169,.6)}.ft-ide .explorer::-webkit-scrollbar-corner{background-color:var(--bg-default-lighter)}.ft-ide[data-ft-ide-theme=dark] .explorer::-webkit-scrollbar-corner,.ft-ide[data-ft-ide-theme=dark] pre::-webkit-scrollbar-corner{background-color:var(--bg-dark-lighter)}.ft-ide[data-ft-ide-size=desktop] .explorer.mobile.show,.ft-ide[data-ft-ide-size=mobile] .explorer{display:none}.ft-ide[data-ft-ide-size=mobile] .content-wrapper .ft-ide-breadcrumb,.ft-ide[data-ft-ide-size=mobile] .mobile-actions{display:flex}.ft-ide[data-ft-ide-size=mobile] #ftide__btn-copy{display:none}@media all and (max-width:400px){.ft-ide .explorer{display:none}.ft-ide .mobile-actions{display:flex}.ft-ide #ftide__btn-copy{display:none}.ft-ide .content-wrapper .ft-ide-breadcrumb{display:flex}}@media all and (min-width:400px){.ft-ide[data-ft-ide-size=desktop] .explorer.mobile.show{display:none}}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .str,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .str{color:#65b042}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .kwd,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .kwd{color:#e28964}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .com,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .com{color:#aeaeae;font-style:italic}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .typ,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .typ{color:#89bdff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .lit,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .lit{color:#3387cc}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pun,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pun{color:#fff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pln,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pln{color:#fff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .tag,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .tag{color:#89bdff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atn,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atn{color:#bdb76b}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atv,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atv{color:#65b042}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .dec,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .dec{color:#3387cc}.ft-ide .content-wrapper code ol.linenums{margin-top:0;margin-bottom:0;color:#aeaeae}.ft-ide .content-wrapper code li.L0,.ft-ide .content-wrapper code li.L1,.ft-ide .content-wrapper code li.L2,.ft-ide .content-wrapper code li.L3,.ft-ide .content-wrapper code li.L5,.ft-ide .content-wrapper code li.L6,.ft-ide .content-wrapper code li.L7,.ft-ide .content-wrapper code li.L8{list-style-type:none}.ft-ide .content-wrapper code li.L1,.ft-ide .content-wrapper code li.L3,.ft-ide .content-wrapper code li.L5,.ft-ide .content-wrapper code li.L7,.ft-ide .content-wrapper code li.L9{background:var(--bg-default)!important}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L1,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L3,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L5,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L7,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L9{background:var(--bg-dark)!important}@media print{.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .str,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .str{color:#060}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .kwd,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .kwd{color:#006;font-weight:700}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .com,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .com{color:#600;font-style:italic}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .typ,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .typ{color:#404;font-weight:700}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .lit,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .lit{color:#044}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pun,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pun{color:#440}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pln,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pln{color:#000}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .tag,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .tag{color:#006;font-weight:700}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atn,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atn{color:#404}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atv,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atv{color:#060}}
    `));
    document.head.appendChild(style);

    //watch for width changes
    // NOTE: This does not protect against resizable divs, only if the window size itself is changed

    window.onresize = function () {
        [...document.querySelectorAll(`.ft-ide`)].forEach(element => {
            if (element.clientWidth < 400) {
                element.setAttribute('data-ft-ide-size', 'mobile');
            } else {
                element.setAttribute('data-ft-ide-size', 'desktop');
                document.querySelector(`#${element.id} .explorer.mobile`).classList.remove('show');
            }
        });
    };
})();
