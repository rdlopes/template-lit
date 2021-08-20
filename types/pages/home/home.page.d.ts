import { LitElement } from 'lit';
export interface HomePageProperties {
}
export declare class HomePage extends LitElement implements HomePageProperties {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-page': HomePage;
    }
}
