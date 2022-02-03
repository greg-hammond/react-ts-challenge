import React, { useRef, useState, useEffect } from 'react'
import RadioButtons from './RadioButtons'
import styled from 'styled-components'
import { IChallenge } from '../interfaces/IChallenge'


const Container = styled.div`
    background-color: var(--color-900);
    padding: 2em;
    flex: 1;

`
const Title = styled.h1`
    color: var(--color-200);
    margin-bottom: 1em;
`

const Description = styled.h3`
`

const Instructions = styled.p`
    font-style: italic;
`

const Prompt = styled.label`
    font-weight: bold;
    font-size: larger;
    margin-right: .5em;
`
const InputBox = styled.input`
    border: 1px solid var(--color-100);
    background-color: var(--color-950);
    font-size: larger;
    font-weight: bold;
    &:focus {
        outline: none;
    }
`

const Units = styled.p`
    font-weight: bold;
    font-size: larger;
    margin-left: .5em;
`

const Button = styled.button`
    font-size: 100%;
    margin: 2em .5em;
    padding: 0.25em 0.5em;
    min-width: 6em;
`
const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Result = styled.p`
    font-weight: bold;
    min-height: 5em;
    padding: 1em;
    border: 1px solid var(--color-100);
`

export default function Challenge({challenge} : {challenge: IChallenge}) {

    const inputElem = useRef<HTMLInputElement>(null)

    const [result, setResult] = useState("")
    const [radioIndex, setRadioIndex] = useState(0)

    useEffect(() => {
        resetChallenge()
    }, [challenge])

    // reset state
    const resetChallenge = () => {
        setResult("")        
        if (inputElem.current) {
            inputElem.current.value = ""
            inputElem.current.focus()
        }
    }

    const selectRadio = (index: number) => {
        setRadioIndex(index)
    }
    
    const processChallenge = () => {
        if (inputElem.current) {
            const data: string = inputElem.current.value
            // run our processing function and grab result!
            const rslt: string = challenge.function(data, radioIndex)
            setResult(rslt)
        }
    }

    return (
        <Container>
            <Title>{challenge.title}</Title>
            <Description>{challenge.description}</Description>
            <Instructions>Instructions: {challenge.instructions}</Instructions>

            <FlexRow>
                <RadioButtons buttons={challenge.radioButtons} selectRadio={selectRadio} curIndex={radioIndex} />
                <Prompt>{challenge.inputPrompt}</Prompt>
                <InputBox ref={inputElem}></InputBox>
                <Units>{challenge.radioButtons && challenge.radioButtons[radioIndex].value}</Units>
            </FlexRow>

            <FlexRow>
                <Button onClick={processChallenge}>{challenge.buttonLabel}</Button>
                <Button onClick={resetChallenge}>Reset</Button>
            </FlexRow>

            <Result>{result}</Result>
        </Container>
    )
}