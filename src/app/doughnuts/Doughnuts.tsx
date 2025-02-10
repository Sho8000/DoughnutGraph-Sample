"use client"
import { useEffect, useRef } from "react"
import { Chart } from "chart.js";
function Example() {
    const Doughnut = useRef<HTMLCanvasElement | null>(null)
    const Doughnut2 = useRef<HTMLCanvasElement | null>(null)
    useEffect(() => {
        const ctx = Doughnut.current!.getContext('2d');
        if(ctx){
            const myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["first", "second", "third","forth","5"],
                    datasets: [{
                        data: [70, 10, 6,10,2],
                        borderColor: [
                            "rgb(75, 192, 192)",
                            "rgb(255, 205, 86)",
                            "rgb(255, 99, 132)",
                            "rgb(2, 99, 132)",
                            "rgb(255, 9, 132)",
                        ],
                        backgroundColor: [
                            "rgb(75, 192, 192 )",
                            "rgb(255, 205, 86)",
                            "rgb(255, 99, 132)",
                            "rgb(2, 99, 132)",
                            "rgb(255, 9, 132)",
                        ],
                        borderWidth: 2,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            display: false,
                        }],
                        yAxes: [{
                            display: false,
                        }],
                    }
                },

            });
        }
        const ct2 = Doughnut2.current!.getContext('2d');
        if(ct2){
            const myChart = new Chart(ct2, {
                type: 'doughnut',
                data: {
                    labels: ["first", "second", "third","forth","5"],
                    datasets: [{
                        data: [150, 10, 6,10,2],
                        borderColor: [
                            "rgb(75, 192, 192)",
                            "rgb(255, 205, 86)",
                            "rgb(255, 99, 132)",
                            "rgb(2, 99, 132)",
                            "rgb(255, 9, 132)",
                        ],
                        backgroundColor: [
                            "rgb(75, 192, 192 )",
                            "rgb(255, 205, 86)",
                            "rgb(255, 99, 132)",
                            "rgb(2, 99, 132)",
                            "rgb(255, 9, 132)",
                        ],
                        borderWidth: 2,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            display: false,
                        }],
                        yAxes: [{
                            display: false,
                        }],
                    }
                },

            });
        }
    }, [])


    return (
        <>
            {/* Doughnut chart */}
            <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
                    <canvas ref={Doughnut} id='myChart'></canvas>
                </div>
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
                    <canvas ref={Doughnut2} id='myChart'></canvas>                    
                </div>
            </div>
        </>
    )
}

export default Example;