import { LitElement } from 'lit';
import 'weightless/nav';
import 'weightless/title';
export interface NavbarAtomProperties {
    brand: string;
}
export declare class NavbarAtom extends LitElement implements NavbarAtomProperties {
    static styles: import("lit").CSSResult;
    brand: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'navbar-atom': NavbarAtom;
    }
}
