export interface User {
  id: string;
  name: string;
  email: string;
  role: 'collaborator' | 'admin';
}

export interface Section {
  id: string;
  title: string;
  content: string;
  progress: number; // 0-100
}

export interface Module {
  id: string;
  title: string;
  type: 'level_quiz' | 'content' | 'final_quiz';
  sections: Section[];
  progress: number; // 0-100
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  progress: number; // 0-100
}

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@company.com',
  role: 'collaborator'
};

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Master the basics of JavaScript programming with hands-on exercises and real-world examples.',
    progress: 65,
    modules: [
      {
        id: 'level-quiz',
        title: 'Level Assessment Quiz',
        type: 'level_quiz',
        progress: 100,
        sections: [
          {
            id: 'assessment',
            title: 'Initial Assessment',
            content: 'Complete this assessment to determine your current JavaScript knowledge level.',
            progress: 100
          }
        ]
      },
      {
        id: '1',
        title: 'Variables and Data Types',
        type: 'content',
        progress: 85,
        sections: [
          {
            id: '1-1',
            title: 'Introduction to Variables',
            content: `Variables are containers for storing data values. In JavaScript, you can declare variables using var, let, or const keywords.

The 'let' keyword is used for variables that can be reassigned:
let age = 25;
age = 26; // This is allowed

The 'const' keyword is used for constants that cannot be reassigned:
const name = "John";
// name = "Jane"; // This would cause an error

Variables can hold different types of data including numbers, strings, booleans, arrays, and objects. Understanding how to properly declare and use variables is fundamental to JavaScript programming.`,
            progress: 100
          },
          {
            id: '1-2',
            title: 'Data Types',
            content: `JavaScript has several built-in data types:

1. Numbers: Used for integers and floating-point numbers
   let count = 42;
   let price = 19.99;

2. Strings: Used for text data
   let message = "Hello, World!";
   let template = \`Welcome, \${name}!\`;

3. Booleans: Used for true/false values
   let isActive = true;
   let isComplete = false;

4. Arrays: Used for ordered lists of data
   let fruits = ["apple", "banana", "orange"];

5. Objects: Used for structured data
   let person = { name: "John", age: 30 };

Understanding these data types is crucial for effective JavaScript programming.`,
            progress: 90
          },
          {
            id: '1-3',
            title: 'Variable Scope',
            content: `Variable scope determines where variables can be accessed in your code. JavaScript has three types of scope:

1. Global Scope: Variables declared outside any function or block
2. Function Scope: Variables declared inside a function
3. Block Scope: Variables declared inside a block (with let/const)

Understanding scope helps prevent bugs and write more maintainable code. Always use the most restrictive scope possible for your variables.`,
            progress: 70
          }
        ]
      },
      {
        id: '2',
        title: 'Functions and Control Flow',
        type: 'content',
        progress: 45,
        sections: [
          {
            id: '2-1',
            title: 'Function Declarations',
            content: `Functions are reusable blocks of code that perform specific tasks. There are several ways to declare functions in JavaScript:

1. Function Declaration:
function greet(name) {
  return "Hello, " + name + "!";
}

2. Function Expression:
const greet = function(name) {
  return "Hello, " + name + "!";
};

3. Arrow Functions:
const greet = (name) => {
  return "Hello, " + name + "!";
};

Functions help organize code and make it more reusable and maintainable.`,
            progress: 80
          },
          {
            id: '2-2',
            title: 'Conditional Statements',
            content: `Conditional statements allow your code to make decisions based on different conditions:

1. if/else statements:
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

2. switch statements:
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("Another day");
}

Mastering conditional logic is essential for creating dynamic applications.`,
            progress: 60
          },
          {
            id: '2-3',
            title: 'Loops',
            content: `Loops allow you to execute code repeatedly. JavaScript provides several loop types:

1. for loop:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

2. while loop:
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

3. for...of loop (for arrays):
for (const item of array) {
  console.log(item);
}

Loops are powerful tools for processing data and automating repetitive tasks.`,
            progress: 10
          }
        ]
      },
      {
        id: 'final-quiz',
        title: 'Final Assessment',
        type: 'final_quiz',
        progress: 0,
        sections: [
          {
            id: 'final-assessment',
            title: 'Final Quiz',
            content: 'Test your understanding of JavaScript fundamentals with this comprehensive quiz.',
            progress: 0
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'React Development',
    description: 'Learn to build modern web applications with React, including hooks, state management, and best practices.',
    progress: 30,
    modules: [
      {
        id: 'level-quiz',
        title: 'Level Assessment Quiz',
        type: 'level_quiz',
        progress: 100,
        sections: [
          {
            id: 'assessment',
            title: 'React Knowledge Assessment',
            content: 'Evaluate your current React knowledge to customize your learning path.',
            progress: 100
          }
        ]
      },
      {
        id: '1',
        title: 'React Basics',
        type: 'content',
        progress: 75,
        sections: [
          {
            id: '1-1',
            title: 'Introduction to React',
            content: `React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community.

Key concepts of React include:

1. Components: Reusable pieces of UI
2. JSX: JavaScript XML syntax extension
3. Virtual DOM: Efficient rendering system
4. Unidirectional data flow: Data flows down, events flow up

React makes it easier to build complex, interactive user interfaces by breaking them down into smaller, manageable components.`,
            progress: 100
          },
          {
            id: '1-2',
            title: 'Components and JSX',
            content: `Components are the building blocks of React applications. They can be written as functions or classes:

Function Component:
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

JSX allows you to write HTML-like syntax in JavaScript:
const element = <h1>Hello, World!</h1>;

JSX makes React code more readable and intuitive, combining the power of JavaScript with the familiarity of HTML.`,
            progress: 85
          },
          {
            id: '1-3',
            title: 'Props and State',
            content: `Props and state are fundamental concepts for managing data in React:

Props (Properties):
- Read-only data passed from parent to child components
- Used to make components reusable

State:
- Mutable data that belongs to a component
- When state changes, the component re-renders

Understanding the difference between props and state is crucial for effective React development.`,
            progress: 40
          }
        ]
      },
      {
        id: '2',
        title: 'Hooks and Advanced Patterns',
        type: 'content',
        progress: 15,
        sections: [
          {
            id: '2-1',
            title: 'useState and useEffect',
            content: `React Hooks allow you to use state and other React features in function components:

useState Hook:
const [count, setCount] = useState(0);

useEffect Hook:
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

Hooks make function components more powerful and are the modern way to write React applications.`,
            progress: 30
          },
          {
            id: '2-2',
            title: 'Custom Hooks',
            content: `Custom Hooks allow you to extract component logic into reusable functions:

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
}

Custom Hooks promote code reuse and help keep components clean and focused.`,
            progress: 0
          }
        ]
      },
      {
        id: 'final-quiz',
        title: 'Final Assessment',
        type: 'final_quiz',
        progress: 0,
        sections: [
          {
            id: 'final-assessment',
            title: 'React Mastery Quiz',
            content: 'Demonstrate your React skills with this comprehensive assessment.',
            progress: 0
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Advanced TypeScript',
    description: 'Master TypeScript for large-scale applications with advanced types, patterns, and best practices.',
    progress: 0,
    modules: [
      {
        id: 'level-quiz',
        title: 'Level Assessment Quiz',
        type: 'level_quiz',
        progress: 0,
        sections: [
          {
            id: 'assessment',
            title: 'TypeScript Skills Assessment',
            content: 'Assess your TypeScript knowledge to tailor the course content to your level.',
            progress: 0
          }
        ]
      },
      {
        id: '1',
        title: 'Advanced Types',
        type: 'content',
        progress: 0,
        sections: [
          {
            id: '1-1',
            title: 'Generic Types',
            content: `Generics provide a way to create reusable components that work with multiple types:

function identity<T>(arg: T): T {
  return arg;
}

Interface with generics:
interface Container<T> {
  value: T;
  getValue(): T;
}

Generics make your code more flexible while maintaining type safety.`,
            progress: 0
          }
        ]
      },
      {
        id: 'final-quiz',
        title: 'Final Assessment',
        type: 'final_quiz',
        progress: 0,
        sections: [
          {
            id: 'final-assessment',
            title: 'TypeScript Expert Quiz',
            content: 'Prove your TypeScript expertise with advanced scenarios and patterns.',
            progress: 0
          }
        ]
      }
    ]
  }
];

export const mockChatMessages = [
  {
    id: '1',
    type: 'assistant' as const,
    content: 'Hello! I\'m your learning assistant. How can I help you with this course?',
    timestamp: new Date('2024-01-15T10:00:00Z')
  },
  {
    id: '2',
    type: 'user' as const,
    content: 'I\'m having trouble understanding variable scope in JavaScript.',
    timestamp: new Date('2024-01-15T10:01:00Z')
  },
  {
    id: '3',
    type: 'assistant' as const,
    content: 'Great question! Variable scope determines where variables can be accessed in your code. Let me break it down for you...',
    timestamp: new Date('2024-01-15T10:01:30Z')
  }
];