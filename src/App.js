import Accordion from "./components/Accordion"
 
 function App() {
    const items = [
        {
            id: "khkjh",
            label: "This is a test",
            content: "this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man"
        },
        {
            id: "wehfg",
            label: "This is a test and another one",
            content: "this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man"
        },
        {
            id: "fwefh",
            label: "This is a test and a third one",
            content: "this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man this stuff is cool man"
        },
    ]
    return <Accordion items={items } />
 }

 export default App 