import React from 'react'
import { challengeDefs } from '../services/challengeDefs'
import styled from 'styled-components'


const Menu = styled.ul`
    display: flex;
    flex-direction: column;
`

const Tab = styled.li`
    font-weight: bold;
    list-style-type: none;
    background-color: var(--tab-background);
    border: 1px solid var(--tab-border);
    border-right-width: 0;
    width: 10em;
    padding: 0.5rem;
    border-top-left-radius: .3rem;
    border-bottom-left-radius: .3rem;
    cursor: pointer;
    &:hover {
        background-color: darker(10%);
    }
    &.selected {
        background-color: var(--challenge-background);
    }
`

type MenuParams = {
    onTabSelect: any,
    selected: number        
}


export default function TabMenu({onTabSelect, selected} : MenuParams) {

    return (
        <div>
            <Menu>
                {challengeDefs.map((ch, index) => 
                    <Tab key={index} data-id={index} className={`${index === selected ? "selected" : ""}`} onClick={onTabSelect}>
                        {ch.tabLabel}
                    </Tab>
                )}
            </Menu>
        </div>    
    )
}