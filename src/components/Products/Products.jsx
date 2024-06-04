import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Header from '../Header/Header'
import Proteina from './Proteina'
import Termogenico from './Termogenico'
import Aminoacidos from './Aminoacido'
import PreTreino from './PreTreino'
import Fitoterapticos from './Fitoterapiticos'
import Colageno from './Colageno'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Nav = styled.nav`
    margin-right: 20px;
    padding: 20px;
    border-radius: 40px;
    border: 2px solid white;
`

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 1s;


    ${(props) =>
        props.active &&
        css`
            color: black;
            background: white;
            padding: 15px;
            border-radius: 40px;
            
        `}
`

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('Proteina')

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    return (
        <>
            <Header/>
            <Container>
                <Nav>
                    <NavLink 
                        onClick={() => handleCategoryClick('Proteina')}
                        active={activeCategory === 'Proteina'}
                    >
                        Proteínas
                    </NavLink>
                    <NavLink 
                        onClick={() => handleCategoryClick('Aminoacidos')}
                        active={activeCategory === 'Aminoacidos'}
                    >
                        Aminoácidos
                    </NavLink>
                    <NavLink 
                        onClick={() => handleCategoryClick('Termogenico')}
                        active={activeCategory === 'Termogenico'}
                    >
                        Termogênicos
                    </NavLink>
                    <NavLink 
                        onClick={() => handleCategoryClick('PreTreino')}
                        active={activeCategory === 'PreTreino'}
                    >
                        Pré Treino
                    </NavLink>
                    <NavLink 
                        onClick={() => handleCategoryClick('Fitoterapticos')}
                        active={activeCategory === 'Fitoterapticos'}
                    >
                        Fitoterápicos
                    </NavLink>
                    <NavLink 
                        onClick={() => handleCategoryClick('Colageno')}
                        active={activeCategory === 'Colageno'}
                    >
                        Colágeno
                    </NavLink> 
                </Nav>

                
                {activeCategory === 'Proteina' && <Proteina />}
                {activeCategory === 'Aminoacidos' && <Aminoacidos />}
                {activeCategory === 'Termogenico' && <Termogenico />}
                {activeCategory === 'PreTreino' && <PreTreino />}
                {activeCategory === 'Fitoterapticos' && <Fitoterapticos />}
                {activeCategory === 'Colageno' && <Colageno />} 
            </Container>
        </>
    )
}

export default Products