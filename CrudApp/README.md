# CrudApp

A simple React Native application demonstrating CRUD (Create, Read, Update, Delete) operations with additional features like theme switching and persistent storage.

## Overview

This application provides functionality for:
- Managing a list of todos with full CRUD operations
- Switching between light and dark themes
- Persisting todos between app sessions
- Using custom fonts (Inter)
- Automatic status bar theming

Built with React Native and Expo, it serves as a comprehensive example of modern mobile app development patterns.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo Go app on your mobile device or an emulator/simulator

### Installation

1.  **Clone this repository**
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npx expo start
    ```
2.  **Open the app:**
    - Scan the QR code using the Expo Go app on your iOS or Android device.
    - Or, press `a` to run on an Android emulator, `i` to run on an iOS simulator, or `w` to run in the web browser.

## Features

- **Todo Management**:
  - Add new todos
  - Mark todos as complete/incomplete
  - Delete todos
  - Todos persist between app sessions using AsyncStorage

- **Theme System**:
  - Light/dark mode toggle
  - Automatic theme detection based on system preferences
  - Themed UI components (backgrounds, text, buttons)
  - Status bar theming

- **UI Enhancements**:
  - Custom Inter font
  - Responsive layout
  - Smooth animations

## Project Structure

- `app/`: Main application screens and components
- `assets/`: Static assets like images and fonts
- `context/`: Theme context and provider
- `data/`: Sample data and initial todos
- `constants/`: Color definitions for themes
- `app.json`: Expo configuration
- `package.json`: Project dependencies and scripts
