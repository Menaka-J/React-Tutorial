export function Header() {
    return (
        <>
            <div className="header">
                <h1>BeeBuddy</h1>
                <ol>
                    <li>Home</li>
                    <li>Content</li>
                    <li>AboutUs</li>
                    <li>Contact</li>
                </ol>
            </div>
        </>
    );
}

export function Display(props) {

    return (
        <>
            <div className="title">
                <p>Title: {props.title}</p>
                <p>Year: {props.year}</p>
            </div>
        </>
    );
}



export default Header