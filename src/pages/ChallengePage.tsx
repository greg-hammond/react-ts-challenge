import { useState } from 'react'
import { challengeDefs } from '../services/challengeDefs'
import TabMenu from '../components/TabMenu'
import Challenge from '../components/Challenge'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: 3rem;
    color: var(--color-900);
    font-weight: bold;
    margin: 0 auto;
    padding: 2rem;
`

const MainArea = styled.div`
    display: flex;
`


export default function ChallengePage() {

    const [index, setIndex] = useState(0)

    const selectTab = (index: number) => setIndex(index)
    
    return (
        <Container>
            <Title>Challenge Hub</Title>
            <MainArea>
                <TabMenu selectTab={selectTab} curIndex={index} />
                <Challenge challenge={challengeDefs[index]}/>
            </MainArea>    
        </Container>
    )
}