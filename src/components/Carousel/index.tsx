import React, { ImgHTMLAttributes, ReactNode } from 'react';

import { ToolsTitleStyle, Container } from './styles'

interface ICarouselRootProps {
    children: ReactNode
}

const Root: React.FC<ICarouselRootProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

Root.displayName = 'Carousel.Root'

interface ICarouselImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
}

const Image: React.FC<ICarouselImageProps> = ({ src, alt, ...props}) => {
    return (    
        <>
            <img src={src} alt={alt} {...props} />
        </>
    )
}

Root.displayName = 'Carousel.Image'

interface ICarouselTitleProps {
    children: ReactNode
}

const Title: React.FC<ICarouselTitleProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

Root.displayName = 'Carousel.Title'

interface ICarouselGithubLinkProps  {
    children: ReactNode,
    href: string
}

const GithubLink: React.FC<ICarouselGithubLinkProps> = ({ children, href }) => {
    return (
        <>
            <a href={href}>
                {children}
            </a>
        </>
    )
}

Root.displayName = 'Carousel.GithubLink'

interface ICarouselToolsProps  {
    children: ReactNode
}

const Tools: React.FC<ICarouselToolsProps> = ({ children }) => {
    return (
        <>
            <ul>
                {children}
            </ul>
        </>
    )
}

Root.displayName = 'Carousel.Tools'

interface ICarouselToolProps  {
    className: string
    color: string
}

const Tool: React.FC<ICarouselToolProps> = ({ className, color }) => {
    return (
        <>
            <i className={className} style={{color: color}}></i>
        </>
    )
}

Root.displayName = 'Carousel.Tool'


interface ICarouselToolsTitleProps {
    children: ReactNode
}

const ToolsTitle: React.FC<ICarouselToolsTitleProps> = ({ children }) => {
    return (
        <>
            <ToolsTitleStyle>
                {children}
            </ToolsTitleStyle>
        </>
    )
}

Root.displayName = 'Carousel.ToolsTitle'

export const Carousel = {
    Root,
    Image,
    Title,
    Tools,
    Tool,
    ToolsTitle,
    GithubLink,
    
}
