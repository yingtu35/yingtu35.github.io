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
import spaceInvaderImage from "../images/space-invaders/space-invaders.PNG"
import webCalculatorImage from "../images/web-calculator/web-calculator.png"
import housingImage from "../images/house-price-predictions/housing.jpg"
import { Flex, Spacer, Center, Heading, Text, Image, Box  } from "@chakra-ui/react"

function Projects() {
    const sectionTitle = "Projects".split("");
    return (
        <Box id="projects-section" className="section-container">
            <Flex className="section-title-container">
                <Box className="section-title-divider" bg="gray.400" />
                <Box mx="2vw" noOfLines={1}>
                    {sectionTitle.map((word, index) => {
                        return (<span className="section-title span cursive color-lam" key={index}>{word}</span>);
                    })}
                </Box>
                <Box className="section-title-divider" bg="gray.400" />
            </Flex>
            <Flex justify="center" alignItems="center" direction="row" wrap="wrap" className="projects-container">
                <Box w="30vw" bg="gray.500" m={3} className="project-box">
                    <Center>
                        <TodoList src={todoListLogo} title="Todo List" type="Web App" link="https://github.com/yingtu35/Todo-List" />
                    </Center>
                </Box>
                <Box w="30vw" bg="yellow.500" m={3} className="project-box">
                    <Center>
                        <JustPostIt src={justPostItLogo} title="Just Post It" type="Web App" link="https://github.com/yingtu35/Just-Post-It" />
                    </Center>
                </Box>
                <Box w="30vw" bg="purple.500" m={3} className="project-box">
                    <Center>
                        <DontTouchTheWall src={DontTouchTheWallLogo} title="Don't Touch the Wall" type="Game" link="https://github.com/yingtu35/Dont-Touch-The-Wall" />
                    </Center>
                </Box>
                <Box w="30vw" bg="red.500" m={3} className="project-box">
                    <Center>
                        <SpaceInvaders src={spaceInvaderImage} title="Space Invaders" type="Game" link="https://github.com/yingtu35/Space-Invaders" />
                    </Center>
                </Box>
                <Box w="30vw" bg="cyan.500" m={3} className="project-box">
                    <Center>
                        <WebCalculator src={webCalculatorImage} title="Web Calculator" type="Web App" link="https://github.com/yingtu35/Web-Calculator" />
                    </Center>
                </Box>
                <Box w="30vw" bg="teal.500" m={3} className="project-box">
                    <Center>
                        <HousingPredictions src={housingImage} title="House Price Predictions" type="Machine Learning" link="https://github.com/yingtu35/House-Prices-Prediction-AI" />
                    </Center>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default Projects