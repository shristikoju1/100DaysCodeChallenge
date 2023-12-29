import Button from './Button';

const App = () => {
    return <div>   
        <h1>Useful Website</h1>
        <p>Which website do you want to open? </p>
        <Button name = "Google" link = "https://www.google.com/"/>
        <Button name = "Facebook" link = "https://www.facebook.com/"/>
        <Button name = "JavaScript" link = "https://www.javascript.com/"/>

        <br></br>
        <Button name = "Netflix" link = "https://www.netflix.com/np/"/>
        <Button name = "Github" link = "https://github.com/"/>
        <Button name = "React Docx" link = "https://codesandbox.io/examples/package/react-docx"/>
        <Button name = "Tail-wind" link = "https://tailwindcss.com/"/>

    </div>
}

export default App;