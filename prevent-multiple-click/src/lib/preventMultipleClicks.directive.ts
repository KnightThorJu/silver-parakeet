import { Directive, HostListener } from '@angular/core';

@Directive({
    // only for elements supported the attribute: disabled
    selector: '[preventMultipleClicks]'
})
export class PreventMultipleClicksDirective {

    @HostListener('click', ['$event'])
    clickEvent(event:Event) {
        // see if the srcElement has the disabled property. If so then it is the actual button. If not then the user
        // clicked on the button's text (span element)
        const button = (((event.target as HTMLButtonElement).disabled === undefined) ? (event.target as Node).parentElement : event.target ) as HTMLElement;
        button.setAttribute('disabled', "true");
        setTimeout(function () {
            button.removeAttribute('disabled');
        }, 1000);
    }
}
