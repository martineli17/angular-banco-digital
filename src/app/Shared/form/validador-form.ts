import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";
import { ValidadorKeys, ValidadorErrosKeys } from "../model/validador-key.model";

@Injectable({ providedIn: "root" })
export class ValidateErrorsFormService{
    GetFormValidationErrors(formGroup: FormGroup, keysLabels: ValidadorKeys[]):ValidadorErrosKeys[] {
        let errorMessage: ValidadorErrosKeys[] = [];
        Object.keys(formGroup.controls).forEach(key => {
            let controlErrors = formGroup.get(key)?.errors;
            if (controlErrors !== null && controlErrors !== undefined)
                Object.keys(controlErrors).forEach(keyError => {
                    if (keyError === "required")
                        errorMessage.push({
                            Label: keysLabels.find(x => x.Name === key)?.Label || "",
                            Error:`${keysLabels.find(x => x.Name === key)?.Label}' precisa ser informado.`
                        });
                    else  if (keyError === "max")
                    errorMessage.push({
                        Label: keysLabels.find(x => x.Name === key)?.Label || "",
                        Error:`${keysLabels.find(x => x.Name === key)?.Label} precisa ter valor máximo de ${controlErrors ? controlErrors[keyError].max : 0}`
                    });
                    else  if (keyError === "min")
                    errorMessage.push({
                        Label: keysLabels.find(x => x.Name === key)?.Label || "",
                        Error:`${keysLabels.find(x => x.Name === key)?.Label} precisa ter valor mínimo de ${controlErrors ? controlErrors[keyError].min : 0}.`
                    });
                    else  if (keyError === "minlength")
                    errorMessage.push({
                        Label: keysLabels.find(x => x.Name === key)?.Label || "",
                        Error:`${keysLabels.find(x => x.Name === key)?.Label} precisa ter no mínimo ${controlErrors ? controlErrors[keyError].requiredLength : 0} caracteres.`
                    });
                    else  if (keyError === "maxlength")
                    errorMessage.push({
                        Label: keysLabels.find(x => x.Name === key)?.Label || "",
                        Error:`${keysLabels.find(x => x.Name === key)?.Label} precisa ter no máximo ${controlErrors ? controlErrors[keyError].requiredLength : 0} caracteres.`
                    });
                    else  if (keyError === "email")
                    errorMessage.push({
                        Label: keysLabels.find(x => x.Name === key)?.Label || "",
                        Error:`${keysLabels.find(x => x.Name === key)?.Label} contém um e-mail inválido.`
                    });
                });
        });
        return errorMessage;
    }
}