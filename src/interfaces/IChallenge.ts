

export interface IChallenge {
    title: string;
    description: string;
    tabLabel: string;
    radioButtons?: { label: string, value: string }[];
    instructions: string;
    buttonLabel: string;
    function: Function;
}