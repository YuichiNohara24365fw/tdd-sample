# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Testing
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:specific -- <filename>` - Run specific test file

### Development
- `npm run lint` - Run ESLint code quality checks
- `npm run lint:fix` - Auto-fix ESLint issues where possible
- `npm start` - Run the application
- `npm run dev` - Run in development mode with nodemon

### TDD Cycle
- `npm run tdd:red` - RED phase: Verify failing tests
- `npm run tdd:green` - GREEN phase: Implement code to pass tests
- `npm run tdd:refactor` - REFACTOR phase: Improve code quality
- `npm run tdd:cycle` - Run complete TDD cycle

## Architecture

This is a JavaScript ES6 modules project demonstrating Test-Driven Development (TDD) principles with Jest testing framework.

### Core Components
- **Calculator class** (`src/calculator.js`): Mathematical operations (add, subtract, multiply, divide, power)
- **StringUtils class** (`src/stringUtils.js`): String manipulation utilities (reverse, isPalindrome, capitalize, wordCount)

### Project Structure
```
src/                    # Source code (ES6 modules)
tests/                  # Jest test files
scripts/                # Helper scripts
docs/                   # Documentation
.github/workflows/      # GitHub Actions CI/CD
```

### Key Technical Details
- **ES6 Modules**: Uses `export`/`import` syntax with `"type": "module"` in package.json
- **Jest Configuration**: Requires `NODE_OPTIONS='--experimental-vm-modules'` for ES6 module support
- **ESLint**: Configured with ES2022 syntax, 2-space indentation, single quotes
- **Test Structure**: Each source file has corresponding test file following TDD patterns

### Testing Approach
- Comprehensive test coverage including edge cases and error conditions
- Each test file imports from corresponding source module
- Tests organized in `describe` blocks for logical grouping
- Error cases properly tested (e.g., division by zero)

### Development Workflow
Follow TDD cycle: Write failing test → Write minimal code to pass → Refactor while keeping tests green.