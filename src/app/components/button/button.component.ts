import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page";


@Component({
    selector: "buttonActionItem",
    moduleId: module.id,
    templateUrl: "button.component.html"
})
export class ButtonComponent implements OnInit {
    @Input() buttonSettings: {
        classes: string,
        text: string
    }
    @Output() onTap = new EventEmitter<EventData>();

    constructor() {
        
    }

    ngOnInit() {
    }


    buttonTap(evt: EventData) {
        this.onTap.emit(evt);
    }
}