const dotNetQuestions = [
    {
        questionText: 'Which set of symbols are used to signify the presence of ASP.NET code?',
        answerOptions: [
            { answerText: '<@', isCorrect: false },
            { answerText: '<#', isCorrect: false },
            { answerText: '<%', isCorrect: true },
            { answerText: '<$', isCorrect: false },
        ],
    },
    {
        questionText: 'A variable which is declared inside a method is called a________variable?',
        answerOptions: [
            { answerText: 'serial', isCorrect: false },
            { answerText: 'local', isCorrect: true },
            { answerText: 'private', isCorrect: false },
            { answerText: 'static', isCorrect: false },
        ],
    },
    {
        questionText: 'Feature of a local variable?',
        answerOptions: [
            { answerText: 'It can be used anywhere in the program', isCorrect: false },
            { answerText: 'It must accept a class', isCorrect: false },
            { answerText: 'It must be declared within a method', isCorrect: true },
            { answerText: 'It represent a class object', isCorrect: false },
        ],
    },
    {
        questionText: 'Two methods with the same name but with different parameters?',
        answerOptions: [
            { answerText: 'Loading', isCorrect: false },
            { answerText: 'Overloading', isCorrect: true },
            { answerText: 'Multiplexing', isCorrect: false },
            { answerText: 'Duplexing', isCorrect: false }
        ],
    },
{
        questionText: 'Is there any errors in this -> EmployeeMgmt constructor: Public int EmployeeMgmt { emp_id = 100; }?',
        answerOptions: [
            { answerText: 'No errors', isCorrect: false },
            { answerText: 'Formal parameters', isCorrect: false },
            { answerText: 'Name', isCorrect: false },
            { answerText: 'Return type', isCorrect: true },
        ],
    },
{
        questionText: 'If a class is using an interface, it must?',
        answerOptions: [
            { answerText: 'inherit the properties of the interface', isCorrect: false },
            { answerText: 'contain the same methods as the interface', isCorrect: false },
            { answerText: 'create an interface object', isCorrect: false },
            { answerText: 'all of the above', isCorrect: true },
        ],
    },
{
        questionText: 'What is the output of the code public class B : A { }?',
        answerOptions: [
            { answerText: 'Errors', isCorrect: false },
            { answerText: 'It defines a class that inherits the public methods of A only', isCorrect: false },
            { answerText: 'It defines a class that inherits all the methods of A but the private members cannot be accessed', isCorrect: true },
            { answerText: 'both b and c', isCorrect: false },
        ],
    },
{
        questionText: 'What are the features of an abstract class?',
        answerOptions: [
            { answerText: 'It contain instance variables', isCorrect: false },
            { answerText: 'It contain constructors', isCorrect: false },
            { answerText: 'It may extend another class', isCorrect: false },
            { answerText: 'all of the above', isCorrect: true },
        ],
    },
{
        questionText: 'Sealed Classes cannot be a base class?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Both', isCorrect: false },
            { answerText: 'None', isCorrect: false },
        ],
    },
{
        questionText: 'Features of Read only variables?',
        answerOptions: [
            { answerText: 'It is allocated at compile time', isCorrect: false },
            { answerText: 'It is allocated at runtime', isCorrect: false },
            { answerText: 'All of these', isCorrect: false },
            { answerText: 'Declaration and initialization is separated', isCorrect: true },
        ],
    },
];

export default dotNetQuestions;
