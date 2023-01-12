import { useState } from 'react'
import { Carousel } from '../Carousel'

import { Content } from './styles'

function App() {

    const api = {
        "title": "Landing Page",
        "image": "genericImage/image.png",
        "sinopseShort": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi harum minus laborum eius tempore dignissimos odit iste dolor voluptatem!",
        "sinopseLong": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio vero mollitia modi numquam alias fugit facere, omnis quod est pariatur, natus in magnam iusto suscipit. Quam, soluta provident? Minima culpa velit doloribus fuga, cumque labore! Aliquam tempore inventore nulla voluptate neque, vitae eaque quia animi molestiae non veniam eius fuga?",
        "iconTecnologics": [
            {   
                "class": "fa-brands fa-js",
                "color": "#EAD41C"
            },
            {
                "class": "fa-brands fa-html5",
                "color": "#E56027"
            },
            {
                "class": "fa-brands fa-css3-alt",
                "color": "#2C9FD8"
            }
        ],
        "codeAndDeploy": {
            "code": "https://github.com/TimboDeveloper",
            "deploy": ""
        }
    }

    return (
        <>
            <Carousel.Root>
                <Carousel.GithubLink href={api.codeAndDeploy.code}>
                    <Carousel.Image src={api.image} alt={api.sinopseShort} />
                    <Content>
                        <Carousel.Title>
                            {api.title}
                        </Carousel.Title>
                        <Carousel.ToolsTitle>
                            Minhas Ferramentas
                        </Carousel.ToolsTitle>
                        <Carousel.Tools>
                            {api.iconTecnologics.map(({ class: className, color }, index) => {
                                return (
                                    <li key={index}>
                                        <Carousel.Tool className={className} color={color} />
                                    </li>
                                )
                            })}
                        </Carousel.Tools>
                    </Content>
                </Carousel.GithubLink>
            </Carousel.Root>
            
            <Carousel.Root>
                <Carousel.GithubLink href={api.codeAndDeploy.code}>
                    <Carousel.Image src={api.image} alt={api.sinopseShort} />
                    <Content>
                        <Carousel.Title>
                            {api.title}
                        </Carousel.Title>
                        <Carousel.ToolsTitle>
                            Minhas Fotos
                        </Carousel.ToolsTitle>
                    </Content>
                </Carousel.GithubLink>
            </Carousel.Root>
        </>
    )
}

export default App
