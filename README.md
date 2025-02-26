# BeMobile Technical Test - Employee Table

## 📋 Project Overview
This is a React Native application that displays a table of employees with search functionality. The application consumes data from a simulated API using json-server.

## 🎯 Features
- Display employee information in a table format including:
  - User thumbnail
  - Name
  - Position
  - Admission date
  - Phone number
- Search functionality that filters by:
  - Position
  - Name
  - Phone number
- Properly formatted dates and phone numbers
- Modern and responsive UI following the provided Figma design

## 🛠️ Technical Requirements
- React Native
- TypeScript
- Node.js
- Yarn
- json-server (for simulated API)

## 📁 Project Structure
```
src/
├── components/         # Reusable UI components
├── screens/           # Application screens
├── services/          # API and other services
├── types/            # TypeScript type definitions
├── utils/            # Helper functions and constants
└── assets/           # Images and other static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (latest LTS version)
- Yarn package manager
- React Native development environment setup
- Android Studio or Xcode (depending on target platform)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
yarn install
```

3. Start the json-server (API simulation):
```bash
json-server --watch db.json
```

4. Run the application:
```bash
# For iOS
yarn ios

# For Android
yarn android
```

## 📱 API Integration
The application connects to a local json-server instance that provides employee data. The API endpoint structure is:

- GET /employees - Fetch all employees

## 🎨 UI/UX Implementation
- Modern and clean interface
- Responsive design that works across different device sizes
- Smooth animations and transitions
- Error handling and loading states
- Search functionality with real-time filtering

## 📦 Dependencies
- React Native
- TypeScript
- Axios (for API requests)
- react-native-vector-icons (for icons)
- date-fns (for date formatting)
- styled-components (for styling)

## 🧪 Testing
- Unit tests for components and utilities
- Integration tests for API services
- E2E tests for critical user flows

## 📝 Code Style
- ESLint configuration for code linting
- Prettier for code formatting
- TypeScript strict mode enabled
- Consistent naming conventions and code organization

## 🔍 Development Practices
- Component-based architecture
- TypeScript for type safety
- Clean and maintainable code
- Proper error handling
- Performance optimization
- Code documentation

## 🏗️ Design Patterns & Architecture
- **Design Patterns**:
  - Factory Pattern: For creating service instances
  - Observer Pattern: For state management and real-time updates
  - Strategy Pattern: For implementing different search/filter strategies
  - Adapter Pattern: For API integration and data transformation
  - Singleton Pattern: For service instances and configuration

- **Architectural Patterns**:
  - Clean Architecture: Separation of concerns with layers
    - Domain Layer: Business logic and entities
    - Data Layer: API calls and data persistence
    - Presentation Layer: UI components and state management
  
- **SOLID Principles**:
  - Single Responsibility Principle
  - Open/Closed Principle
  - Liskov Substitution Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle

- **State Management**:
  - Unidirectional data flow
  - Immutable state updates
  - Centralized state management

- **Code Organization**:
  - Feature-based folder structure
  - Dependency injection
  - Interface-driven development
  - Repository pattern for data access

## 📈 Future Improvements
- Add pagination for large data sets
- Implement sorting functionality
- Add more filter options
- Offline support
- Dark mode support

## 📄 License
This project is part of a technical interview test for BeMobile. 