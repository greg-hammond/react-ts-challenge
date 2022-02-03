// Challenge object interface

import { IRadioButton } from "./IRadioButton";

export interface IChallenge {
    title: string;
    description: string;
    tabLabel: string;
    radioButtons?: IRadioButton[];
    instructions: string;
    inputPrompt: string;
    buttonLabel: string;
    function: Function;
}