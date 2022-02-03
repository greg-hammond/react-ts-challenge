import React from 'react'
import { IRadioButton } from '../interfaces/IRadioButton'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 2em;
    display: flex;
    flex-direction: column;
`

const Title = styled.p`
    margin: .5em;
`

type RadioParams = {
    buttons: IRadioButton[] | undefined,
    selectRadio: any,
    curIndex: number        
}

export default function RadioButtons({ buttons, selectRadio, curIndex } : RadioParams) {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        selectRadio(index)
    }

    return (
        <Container>
            {buttons && 
                <Title>Select:</Title>
            }
            {buttons && buttons.map((btn, index) => (
                <label key={btn.value}>
                    <input 
                        type="radio" 
                        id={`radio${btn.value}`} 
                        name="options" 
                        value={btn.value}
                        defaultChecked={index === curIndex}
                        onChange={(e) => changeHandler(e, index)}
                    ></input>
                    {btn.label}
                </label>
            ))}
        </Container>    
    )
}