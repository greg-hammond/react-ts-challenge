import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { IChallenge } from '../interfaces/IChallenge'


const Container = styled.div`
    background-color: var(--challenge-background);
    padding: 2em;
    flex: 1;

`

const Title = styled.h1`
`

const Description = styled.h3`
    margin: 0 auto;
`

const Instructions = styled.p`
    font-style: italic;
`

const InputBox = styled.input`
    background-color: #eee;
    border: 1px solid #333;
    font-size: 125%;
    font-weight: bold;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    font-size: 100%;
    margin: 0.5em;
    padding: 0.25em 0.5em;
    min-width: 6em;
     
`

const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`

const Result = styled.p`
    min-height: 5em;
    padding: 1em;
    border: 1px solid #333;
`

export default function Challenge({challenge} : {challenge: IChallenge}) {

    const inputElem = useRef<HTMLInputElement>(null)

    const [result, setResult] = useState("")

    const processChallenge = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (inputElem.current) {
            const data: string = inputElem.current.value
            const rslt: string = challenge.function(data)
            setResult(rslt)
            console.log(rslt)
        }
    }

    const resetChallenge = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setResult("")        
        if (inputElem.current) {
            inputElem.current.value = ""
            inputElem.current.focus()
        }
    }

    return (
        <Container>
            <Title>{challenge.title}</Title>
            <Description>{challenge.description}</Description>
            <Instructions>Instructions: {challenge.instructions}</Instructions>

            <FlexRow>

                {challenge.radioButtons && challenge.radioButtons.map(btn => (
                    <label key={btn.value}>
                        <input type="radio" id={`radio${btn.value}`} name="options" value={btn.value}></input>
                        {btn.label}
                    </label>
                ))}


                <InputBox ref={inputElem}></InputBox>
            </FlexRow>

            <FlexRow>
                <Button onClick={processChallenge}>{challenge.buttonLabel}</Button>
                <Button onClick={resetChallenge}>Reset</Button>
            </FlexRow>

            <Result>{result}</Result>
        </Container>
    )
}