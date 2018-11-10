import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TextSettings } from "../../models/universals/text-settings.model";
import { TextField } from "tns-core-modules/ui/text-field";


@Component({
    selector: "textInputItem",
    moduleId: module.id,
    templateUrl: "text-input.component.html"
})
export class TextInputComponent implements OnInit {
    @Input() textSettings: {
        hint?: string,
        secure?: boolean,
        keyboardType?: string,
        returnKeyType?: string,
        autoCorrect?: boolean,
        maxLength?: number,
        textboxType?: string
    };
    @Output() onReturn = new EventEmitter<{ textboxValue: string, textboxType: string }>();
    @Output() onBlur = new EventEmitter<{ textboxValue: string, textboxType: string }>();

    constructor() {
        
    }

    ngOnInit() {
        this.textSettings.maxLength = this.textSettings.maxLength ? this.textSettings.maxLength : 1000;
    }

    onTextBoxReturn(evt) {
        const textField = <TextField>evt.object;
        var obj = {
            textboxValue: textField.text,
            textboxType: this.textSettings.textboxType
        }
        this.onReturn.emit(obj);
    }

    onTextboxBlur(evt) {
        const textField = <TextField>evt.object;
        var obj = {
            textboxValue: textField.text,
            textboxType: this.textSettings.textboxType
        }
        this.onBlur.emit(obj);
    }
}