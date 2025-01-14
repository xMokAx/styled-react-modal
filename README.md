# Styled React Modal

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm version](https://img.shields.io/npm/v/styled-react-modal.svg)](https://www.npmjs.com/package/styled-react-modal) [![npm downloads](https://img.shields.io/npm/dm/styled-react-modal.svg)](https://www.npmjs.com/package/styled-react-modal) [![Build Status](https://travis-ci.com/AlexanderRichey/styled-react-modal.svg?branch=master)](https://travis-ci.com/AlexanderRichey/styled-react-modal) [![codecov](https://codecov.io/gh/AlexanderRichey/styled-react-modal/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexanderRichey/styled-react-modal)

> For support for **react <16.8** (before hooks), please use **styled-react-modal@1.2.4**.

> For support for **styled-components v3**, please use **styled-react-modal@1.0.0**.

Accessible modal dialog component for React.JS built with styled-components. It uses the latest React 16.x features and exposes a familiar, easy to use API. It supports `beforeOpen()`, `afterOpen()`, and other lifecycle hooks so that animations can be handled easily. Unlike several other modal implementations in React, it does not pollute the DOM with excessive nodes.

This component is accessible following WAI ARIA best practices which you can check here https://www.w3.org/TR/wai-aria-practices/#dialog_modal.

## Install

```
npm i styled-react-modal
```

or

```
yarn add styled-react-modal
```

## Usage

Add the `<ModalProvider>` component near the top of your application's tree.

```js
import React from 'react'
import { ModalProvider } from 'styled-react-modal'
...

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <FancyModalButton />
      </ModalProvider>
    </ThemeProvider>
  )
}
```

Use the `<Modal>` component.

```js
import Modal from 'styled-react-modal'
...

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`

function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  render () {
    return (
      <div>
        <button onClick={toggleModal}>Click me</button>
        <StyledModal
          isOpen={isOpen}
          closeModal={toggleModal}
          closeOnBackgroundClick={true}
        >
          <span>I am a modal!</span>
          <button onClick={toggleModal}>Close me</button>
        </StyledModal>
      </div>
    )
  }
}

```

## API

#### Top-Level Exports

- `<ModalProvider>`
- `Modal` (Default)
  - `Modal.styled(styles)`
  - `<Modal>`
- `<BaseModalBackground>`

<hr>

### `<ModalProvider>`

Sets the root portal where `<Modal>`s will be rendered.

**Props**

- [`backgroundComponent`](Component): A styled component to be used as the default modal background. If not provided, library defaults will be used.

_Example:_

```js
import { ModalProvider } from "styled-react-modal";

const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  opacity: ${props => props.opacity};
  background-color: green;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <FancyModalButton />
      </ModalProvider>
    </ThemeProvider>
  );
}
```

### `Modal.styled(styles)`

Factory method that accepts a tagged template literal and returns a `<Modal>` component with styles included.

**Arguments**

- `styles` (Tagged Template Literal): styled-components compatible css styles.

_Example:_

```js
const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`;
```

### `<Modal>`

Renders its children in a modal when open, nothing when not open.

**Props**

- `isOpen` (Boolean) (`required`): A boolean that indicates whether the modal is to be open or closed.
- `closeModal` (Function) (`required`): A function to close the modal will be used internally by closeOnEscapeKeydown and closeOnBackgroundClick if set to true. You can omit it if you will set both closeOnEscapeKeydown and closeOnBackgroundClick to false.
- `closeOnEscapeKeydown` (Boolean) (default: `true`): A boolean that indicates whether the modal should be closed on escape keydown or not.
- `closeOnBackgroundClick` (Boolean) (default: `false`): A boolean that indicates whether the modal should be closed on background click or not.
- [`onBackgroundClick`](Function): A function that is called when the modal background is clicked.
- [`onEscapeKeydown`](Function): A function that is called when the escape key is pressed while the modal is open and is the last opened modal in case of nested modals.
- [`backgroundProps`](Object): A props object that is spread over the `backgroundComponent` when included.
- [`allowScroll`](Boolean): When true, scrolling in the document body is not disabled when the modal is open.
- [`beforeOpen`](Function): A function that is called before the modal opens. If this function returns a promise, then the modal is opened after the promise is resolved.
- [`afterOpen`](Function): A function that is called after the modal opens.
- [`beforeClose`](Function): A function that is called before the modal closes. If this function returns a promise, then the modal is closed after the promise is resolved.
- [`afterClose`](Function): A function that is called after the modal closes.
- [`elToFocusAfterOpenId`](String): Id of element to have the initial focus when the modal is open.
- [`elToFocusAfterCloseId`](String): Id of element to have the focus after the modal is closed.

_Example:_

```js
import Modal from 'styled-react-modal'

function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  render () {
    return (
      <div>
        <button onClick={toggleModal}>Click me</button>
        <Modal
          isOpen={isOpen}
          closeModal={toggleModal}
          closeOnBackgroundClick={true}
        >
          <span>I am a modal!</span>
          <button onClick={toggleModal}>Close me</button>
        </Modal>
      </div>
    )
  }
}

```

### `<BaseModalBackground>`

A convenience base component for making default background styles with `<ModalProvider>`.

_Example:_

```js
const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: green;
`;
```
