import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import Proteina from './Proteina'
import Termogenico from './Termogenico'
import Aminoacidos from './Aminoacido'
import PreTreino from './PreTreino'
import Fitoterapticos from './Fitoterapticos'
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
    color: #333;
    text-decoration: none;
    margin-right: 20px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('Proteina');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    }

    return (
        <>
            <Header/>
            <Container>
                <Nav>
                    <NavLink onClick={() => handleCategoryClick('Proteina')}>Proteínas</NavLink>
                    <NavLink onClick={() => handleCategoryClick('Aminoacidos')}>Aminoácidos</NavLink>
                    <NavLink onClick={() => handleCategoryClick('Termogenico')}>Termogênicos</NavLink>
                    <NavLink onClick={() => handleCategoryClick('PreTreino')}>Pré Treino</NavLink>
                    <NavLink onClick={() => handleCategoryClick('Fitoterapticos')}>Fitoterápicos</NavLink>
                    <NavLink onClick={() => handleCategoryClick('Colageno')}>Colágeno</NavLink> 
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