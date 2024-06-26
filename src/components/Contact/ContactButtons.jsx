import React, {Fragment} from "react"
import Media from "react-media";
import { ButtonGroup, Button } from "@chakra-ui/react"
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ContactButtonMobile() {
    return (
        <Fragment>
            <a className="contact-iconBtn" href="https://github.com/yingtu35" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a className="contact-iconBtn color-linkedin" href="https://www.linkedin.com/in/yingtu/" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a className="contact-iconBtn color-facebook" href="https://www.facebook.com/profile.php?id=100000582214483" target="_blank" rel="noreferrer">
                <FaFacebook />
            </a>
            <a className="contact-iconBtn color-instagram" href="https://www.instagram.com/yingtu35/" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a className="contact-iconBtn color-gmail" href="mailto:yingtu35@gmail.com" target="_blank" rel="noreferrer">
                <SiGmail />
            </a>
        </Fragment>
    )
}

function ContactButtonPC() {
    return (
        <Fragment>
            <Button as="a"
                    leftIcon={<FaGithub />}
                    size={["sm", "sm", "sm", "md", "md"]}
                    href="https://github.com/yingtu35"
                    className="hidden contact-btn">
                Github
            </Button>
            <Button colorScheme="linkedin"
                    as="a"
                    leftIcon={<FaLinkedin className="color-linkedin" />}
                    size={["sm", "sm", "sm", "md", "md"]}
                    href="https://www.linkedin.com/in/ying-tu-06b208102/"
                    className="hidden contact-btn">
                Linkedin
            </Button>
            <Button colorScheme="facebook"
                    as="a"
                    leftIcon={<FaFacebook className="color-facebook" />}
                    size={["sm", "sm", "sm", "md", "md"]}
                    href="https://www.facebook.com/profile.php?id=100000582214483"
                    className="hidden contact-btn">
                Facebook
            </Button>
            <Button colorScheme="pink"
                    as="a"
                    leftIcon={<FaInstagram className="color-instagram" />}
                    size={["sm", "sm", "sm", "md", "md"]}
                    href="https://www.instagram.com/orevo860305/"
                    className="hidden contact-btn">
                Instagram
            </Button>
            <Button colorScheme="yellow"
                    as="a"
                    leftIcon={<SiGmail color="red" />}
                    size={["sm", "sm", "sm", "md", "md"]}
                    href="mailto:yingtu35@gmail.com"
                    className="hidden contact-btn">
                Mail
            </Button>
        </Fragment>
    )
}

function ContactButtons() {
    return (
        <ButtonGroup>
            <Media query= "(max-width: 767px)">
                {matches => matches ? (
                    <ContactButtonMobile />
                ) : (
                    <ContactButtonPC />
                )}
            </Media>
                
        </ButtonGroup>
    )
}

export default ContactButtons;