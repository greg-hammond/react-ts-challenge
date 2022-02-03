import React from 'react'
import { challengeDefs } from '../services/challengeDefs'
import styled from 'styled-components'


const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    padding-inline-start: 0;
`

const Tab = styled.li`
    width: 10em;
    font-weight: bold;
    padding: 0.5rem;
    list-style-type: none;
    border: 1px solid var(--color-100);
    background-color: var(--color-300);
    border-right-width: 0;
    border-top-left-radius: .3rem;
    border-bottom-left-radius: .3rem;
    cursor: pointer;
    transition: 150ms linear all;
    &:hover {
        background-color: var(--color-400);
    }
    &.selected {
        background-color: var(--color-900);
    }
`

type MenuParams = {
    selectTab: any,
    curIndex: number        
}

export default function TabMenu({ selectTab, curIndex } : MenuParams) {

    const clickHandler = (event: React.MouseEvent<HTMLLIElement>, idx: number) => {
        selectTab(idx)
    }

    return (
        <div>
            <Menu>
                {challengeDefs.map((ch, index) => 
                    <Tab key={index} data-id={index} className={`${index === curIndex ? "selected" : ""}`} onClick={(e) => clickHandler(e, index)}>
                        {ch.tabLabel}
                    </Tab>
                )}
            </Menu>
        </div>    
    )
}