import { useState } from "react";
import "./styles.css";
import useDebounce from "./useDebounce";
import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/todos";

export default function useDebounceDisplay() {
    const [inputValue, setInputValue] = useState("");
    const debounceValue = useDebounce(inputValue, 1000);


    return (
        <div className="App">
            <p>value : {inputValue}</p>
            <p>debounceValue : {debounceValue}</p>
            <input onChange={(e) => setInputValue(e.target.value)} />
        </div>
    );
}
