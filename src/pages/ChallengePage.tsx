import React, { useState, useEffect } from 'react'
import { challengeDefs } from '../services/challengeDefs'
import TabMenu from '../components/TabMenu'
import Challenge from '../components/Challenge'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    padding: 2rem;
`

const MainArea = styled.div`
    display: flex;
`


export default function ChallengePage() {

    const [index, setIndex] = useState("0")

    useEffect(() => {
        console.log(index)
    }, [index])

    const onTabSelect = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault()
        const li: HTMLLIElement = event.currentTarget
        const tab: string | undefined = li.dataset.id
        if (tab) {
            setIndex(tab)
        }
    }


    return (
        <Container>
            <Title>Challenge Center</Title>
            <MainArea>
                <TabMenu onTabSelect={onTabSelect} selected={parseInt(index)} />
                <Challenge challenge={challengeDefs[parseInt(index)]}/>
            </MainArea>    
        </Container>
    )
}