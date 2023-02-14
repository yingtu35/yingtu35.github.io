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
    return (
        <Box id="projects-section">
            <Flex justifyContent="flex-end" alignItems="center">
                <Box height="0.1vh" width="30%" bg="gray.400" />
                <Heading ml={5}>Projects</Heading>
            </Flex>
            <Flex justify="center" alignItems="center" direction="row" wrap="wrap">
                <Box w="30%" bg="gray.500" m={3}>
                    <Center>
                        <TodoList src={todoListLogo} title="Todo List" type="Web App" link="https://github.com/yingtu35/Todo-List" />
                    </Center>
                </Box>
                <Box w="30%" bg="yellow.500" m={3}>
                    <Center>
                        <JustPostIt src={justPostItLogo} title="Just Post It" type="Web App" link="https://github.com/yingtu35/Just-Post-It" />
                    </Center>
                </Box>
                <Box w="30%" bg="purple.500" m={3}>
                    <Center>
                        <DontTouchTheWall src={DontTouchTheWallLogo} title="Don't Touch the Wall" type="Game" link="https://github.com/yingtu35/Dont-Touch-The-Wall" />
                    </Center>
                </Box>
                <Box w="30%" bg="red.500" m={3}>
                    <Center>
                        <SpaceInvaders src={spaceInvaderImage} title="Space Invaders" type="Game" link="https://github.com/yingtu35/Space-Invaders" />
                    </Center>
                </Box>
                <Box w="30%" bg="cyan.500" m={3}>
                    <Center>
                        <WebCalculator src={webCalculatorImage} title="Web Calculator" type="Web App" link="https://github.com/yingtu35/Web-Calculator" />
                    </Center>
                </Box>
                <Box w="30%" bg="teal.500" m={3}>
                    <Center>
                        <HousingPredictions src={housingImage} title="House Price Predictions" type="Machine Learning" link="https://github.com/yingtu35/House-Prices-Prediction-AI" />
                    </Center>
                </Box>
            </Flex>
        </Box>
        
    )
}

export default Projects