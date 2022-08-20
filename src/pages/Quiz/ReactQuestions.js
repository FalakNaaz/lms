const reactQuestions = [
    {
        questionText: 'What is the correct command to create a new React project?',
        answerOptions: [
            { answerText: 'npx create-react-app', isCorrect: false },
            { answerText: 'npm create-react-app myReactApp', isCorrect: false },
            { answerText: 'npx create-react-app myReactApp', isCorrect: true },
            { answerText: 'npm create-react-app', isCorrect: false },
        ],
    },
    {
        questionText: 'What command is used to start the React local development server?',
        answerOptions: [
            { answerText: 'npm build', isCorrect: false },
            { answerText: 'npm start', isCorrect: true },
            { answerText: 'npm serve', isCorrect: false },
            { answerText: 'npm run dev', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the default local host port that a React development server uses?',
        answerOptions: [
            { answerText: '5000', isCorrect: false },
            { answerText: '3500', isCorrect: false },
            { answerText: '3000', isCorrect: true },
            { answerText: '8080', isCorrect: false },
        ],
    },
    {
        questionText: 'To develop and run React code, Node.js is required.',
        answerOptions: [
            { answerText: 'false', isCorrect: false },
            { answerText: 'true', isCorrect: true },
        ],
    },
{
        questionText: 'Which keyword creates a constant in JavaScript?',
        answerOptions: [
            { answerText: 'let', isCorrect: false },
            { answerText: 'var', isCorrect: false },
            { answerText: 'constant', isCorrect: false },
            { answerText: 'const', isCorrect: true },
        ],
    },
{
        questionText: 'A copy of the "real" DOM that is kept in memory is called what?',
        answerOptions: [
            { answerText: 'react DOM', isCorrect: false },
            { answerText: 'shadow DOM', isCorrect: false },
            { answerText: 'DOM', isCorrect: false },
            { answerText: 'virtual DOM', isCorrect: true },
        ],
    },
{
        questionText: 'Which operator can be used to conditionally render a React component?',
        answerOptions: [
            { answerText: '||', isCorrect: false },
            { answerText: '::', isCorrect: false },
            { answerText: '??', isCorrect: false },
            { answerText: '&&', isCorrect: true },
        ],
    },
{
        questionText: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
        answerOptions: [
            { answerText: 'index', isCorrect: false },
            { answerText: 'id', isCorrect: false },
            { answerText: 'data', isCorrect: false },
            { answerText: 'key', isCorrect: true },
        ],
    },
{
        questionText: 'What tool does React use to compile JSX?',
        answerOptions: [
            { answerText: 'React Router', isCorrect: false },
            { answerText: 'JSX Compiler', isCorrect: false },
            { answerText: 'React DOM', isCorrect: false },
            { answerText: 'Babel', isCorrect: true },
        ],
    },
{
        questionText: 'Which of the following is NOT a rule for React Hooks?',
        answerOptions: [
            { answerText: 'Hooks can only be called inside React Function Compnents', isCorrect: false },
            { answerText: 'Hooks cannnot be conditional', isCorrect: false },
            { answerText: 'Hooks can only be called at the top level of the component', isCorrect: false },
            { answerText: 'Hooks can be called inside class and functional component', isCorrect: true },
        ],
    },
];

export default reactQuestions;
