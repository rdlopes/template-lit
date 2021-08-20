import { LitElement } from 'lit';
import 'weightless/text';
export interface MainMoleculeProperties {
}
export declare class MainMolecule extends LitElement implements MainMoleculeProperties {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-molecule': MainMolecule;
    }
}
