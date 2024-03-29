import { Link, Outlet } from "react-router-dom";

export default function Root() {
    let questions = ['customeHook', 'api', 'timer', 'first', 'second', 'third', 'fourth', 'fivth', 'sixth', 'seven', 'eight', 'nine', 'eleven']
    return (
        <>
            <div id="sidebar" style={{ background: "black", color: "white" }}>
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input id='q' aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q" />


                        <div id="search-spinner"
                            aria-hidden
                            hidden={true}>
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                        </div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        {questions && questions.map((questionNumber, index) => {
                            return (<li key={index}>
                                <Link to={`/question/${questionNumber}`}>{`Question No. ${questionNumber}`}</Link>
                            </li>)
                        })}
                        {/* <li>
                            <Link to={`/question/second`}>Question No. 2</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}