import "./App.css";
import BarChart from "./components/CurranPatheticBarChart/BarChart";
import TheMarginConvention from "./components/CurranTheMarginConvention/TheMarginConvention";
import StylizedBarChart from "./components/CurranStylizedBarChart/StylizedBarChart";

function App() {
    return (
        <div className="App">
            <div className={"container"}>
                <StylizedBarChart/>
            </div>
        </div>
    );
}

export default App;
