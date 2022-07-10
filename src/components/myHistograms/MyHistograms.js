import Histogram2 from "./Histogram2";

export default function MyHistograms() {
    const margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 460,
        height = 400;
    // const data = [90, 10, 20, 120, 40, 180, 100, 80]
    // const data = [1, 2, 3, 4, 5]
    const data = [80, 100, 56, 120, 180, 30, 40, 120, 160];
    const barPadding = 5, barWidth = width / data?.length;
    const dimensions = {
        width: width,
        height: height,
        margin: margin,
        barPadding: barPadding,
        barWidth: barWidth
    }


    return (
            <div className={"container"}>
                {/*//         <Histogram dimensions={dimensions} data={data}/>*/}
                <Histogram2 dimensions={dimensions} data={data}/>

            </div>
    );
}