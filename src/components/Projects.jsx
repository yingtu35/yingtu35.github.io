import React from "react"
import TodoList from "../projects/TodoList"
import JustPostIt from "../projects/JustPostIt"
import DontTouchTheWall from "../projects/DontTouchTheWall"
import SpaceInvaders from "../projects/SpaceInvaders"
import WebCalculator from "../projects/WebCalculator"
import HousingPredictions from "../projects/HousingPredictions"
import todoListLogo from "../images/todo-list/todo-list.png"
import justPostItLogo from "../images/just-post-it/just-post-it.PNG"
import DontTouchTheWallLogo from "../images/dont-touch-the-wall/game_menu.PNG"
import spaceInvaderImage from "../images/space-invaders/screenshot_2.png"
import webCalculatorImage from "../images/web-calculator/web-calculator.png"
import housingImage from "../images/house-price-predictions/housing.jpg"
import { Flex, Spacer, Center, Heading, Text, Image, Box  } from "@chakra-ui/react"

function Projects() {
    const sectionTitle = "Projects".split("");
    return (
        <Box id="projects-section" className="section-container">
            <Flex className="section-title-container">
                <Box className="section-title-divider" />
                <Box className="section-title-box">
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                <Box className="section-title-divider" />
            </Flex>
            <Flex className="projects-container">
                <TodoList src={todoListLogo} title="Todo List" type="Web App" link="https://github.com/yingtu35/Todo-List" />
                <JustPostIt src={justPostItLogo} title="Just Post It" type="Web App" link="https://github.com/yingtu35/Just-Post-It" />
                <DontTouchTheWall src={DontTouchTheWallLogo} title="Don't Touch the Wall" type="Game" link="https://github.com/yingtu35/Dont-Touch-The-Wall" />
                <SpaceInvaders src={spaceInvaderImage} title="Space Invaders" type="Game" link="https://github.com/yingtu35/Space-Invaders" />
                <WebCalculator src={webCalculatorImage} title="Web Calculator" type="Web App" link="https://github.com/yingtu35/Web-Calculator" />
                <HousingPredictions src={housingImage} title="House Price Predictions" type="Machine Learning" link="https://github.com/yingtu35/House-Prices-Prediction-AI" />
            </Flex>
        </Box>
        
    )
}

export default Projects