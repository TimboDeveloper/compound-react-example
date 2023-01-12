# Carousel 

This is a React component library for creating a carousel. The library includes multiple functional components that can be composed together to create a complete carousel. 

## Components 

- **Root**: This component serves as the container for all the other carousel components. It accepts a single prop, "children", which is the content that should be rendered within the carousel.

- **Image**: This component is used for displaying images within the carousel. It accepts "src" and "alt" props as well as other props that are passed down to the underlying HTML image element.

- **Title**: This component is used for displaying the title of the carousel. It accepts a single prop, "children", which is the content of the title.

- **GithubLink**: This component is used for displaying the link to the Github repository. It accepts "children" and "href" props.

- **Tools**: This component is used for displaying a list of tools. It accepts a single prop, "children", which is the content of the list.

- **Tool**: This component is used for displaying a single tool. It accepts "className" and "color" props which is the classname and color of the tool.

- **ToolsTitle**: This component is used for displaying the title of the tools section. It accepts a single prop, "children", which is the content of the title.

## Usage

To use the carousel, you first need to import it into your project:

```jsx
import { Carousel } from './carousel'

<Carousel.Root>
  <Carousel.Image src={imageSrc} alt={imageAlt} />
  <Carousel.Title>My Carousel</Carousel.Title>
  <Carousel.Tools>
    <Carousel.Tool className="icon-tool" color="green" />
    <Carousel.Tool className="icon-tool" color="red" />
  </Carousel.Tools>
  <Carousel.ToolsTitle>Tools Used:</Carousel.ToolsTitle>
  <Carousel.GithubLink href="https://github.com/my-repo">My Repo</Carousel.GithubLink>
</Carousel.Root>
```

Please note that for this example to work, you need to import the required css for the tools and toolsTitle component to work.

Customization
You can customize the appearance of the carousel by passing additional props to the components or by overriding the default styles with your own CSS.

The styles are defined in the ./styles file, it's recommended to modify them in order to fit your needs.

Limitations
Please note that this library is provided as is, and it is expected that you will customize it to suit your needs. It is also assumed that you have a basic understanding of React and how to use functional components.

Also it's a good practice to use them as a guide to develop your own carousel or as a base to customize it to your own design, it's not recommended to use it as is in production.

Conclusion
The Carousel component library is a useful tool for creating a simple carousel in React. It provides a set of reusable components that can be composed together to create a complete carousel. It's easy to customize to fit your needs and it provides a good foundation to build from.
