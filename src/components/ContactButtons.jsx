import React, {Fragment} from "react"
import Media from "react-media";
import { ButtonGroup, Button } from "@chakra-ui/react"
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ContactButtons() {
    return (
        <ButtonGroup>
            <Media query= "(max-width: 767px)">
                {matches => matches ? (
                    // Mobile
                    <Fragment>
                        <a className="contact-iconBtn" href="https://github.com/yingtu35" target="_blank">
                            <FaGithub />
                        </a>
                        <a className="contact-iconBtn color-linkedin" href="https://www.linkedin.com/in/ying-tu-06b208102/" target="_blank">
                            <FaLinkedin />
                        </a>
                        <a className="contact-iconBtn color-facebook" href="https://www.facebook.com/profile.php?id=100000582214483" target="_blank">
                            <FaFacebook />
                        </a>
                        <a className="contact-iconBtn color-instagram" href="https://www.instagram.com/orevo860305/" target="_blank">
                            <FaInstagram />
                        </a>
                    </Fragment>
                ) : (
                    // PC and tablet
                    <Fragment>
                        <Button as="a"
                                leftIcon={<FaGithub />}
                                size={["sm", "sm", "sm", "md", "md"]}
                                href="https://github.com/yingtu35">
                            Github
                        </Button>
                        <Button colorScheme="linkedin"
                                as="a"
                                leftIcon={<FaLinkedin className="color-linkedin" />}
                                size={["sm", "sm", "sm", "md", "md"]}
                                href="https://www.linkedin.com/in/ying-tu-06b208102/">
                            Linkedin
                        </Button>
                        <Button colorScheme="facebook"
                                as="a"
                                leftIcon={<FaFacebook className="color-facebook" />}
                                size={["sm", "sm", "sm", "md", "md"]}
                                href="https://www.facebook.com/profile.php?id=100000582214483">
                            Facebook
                        </Button>
                        <Button colorScheme="pink"
                                as="a"
                                leftIcon={<FaInstagram className="color-instagram" />}
                                size={["sm", "sm", "sm", "md", "md"]}
                                href="https://www.instagram.com/orevo860305/">
                            Instagram
                        </Button>
                        <Button colorScheme="yellow"
                                as="a"
                                leftIcon={<SiGmail color="red" />}
                                size={["sm", "sm", "sm", "md", "md"]}
                                href="mailto:yingtu35@gmail.com">
                            Mail
                        </Button>
                    </Fragment>
                )}
            </Media>
                
        </ButtonGroup>
    )
}

export default ContactButtons;