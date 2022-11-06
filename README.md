<h2 align="center">React Native Speed Art 📱</h2>
<p align="center">
The fastest design library for React Native.
</p>

---

## Description

React Native Speed Art is a design library with many types of customizable and reusable components. It also has an object with many utility classes that will help you to write less code.

## Features

- Components with modern design.
- Costumize the components with your own style.
- Utility classes with different properties to meet the needs of the developer.

## Quick start

-Install with [npm](https://www.npmjs.com/): `npm i rn-speed-art`

-The library has different components. The most common are buttons, inputs and container, you can import theme like this: `import { Button, Input, Container } from "rn-speed-art"`.

-Each component has its own properties, some are required and some are optional.

```
import { Container, Button, Input } from "rn-speed-art"

const App = () => {
  return (
    <Container>
	    <Button text="Save" onPress={() => console.log('Hello world')} />
	    <Input placeholder="Email" onChangeText={(text: string) => console.log(text)} />
	  </Container>
  );
}
```
