import { LitElement } from 'lit';
import "weightless/banner";
import "weightless/button";
import "weightless/icon";
export interface FooterAtomProperties {
    author: string;
    link: string;
}
export declare class FooterAtom extends LitElement implements FooterAtomProperties {
    static styles: import("lit").CSSResult;
    author: string;
    link: string;
    render(): import("lit-html").TemplateResult<1>;
    private onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'footer-atom': FooterAtom;
    }
}
