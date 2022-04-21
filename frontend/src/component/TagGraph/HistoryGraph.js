import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';


const HistoryGraph = ({ dates }) => {

    const chartComponent = useRef(null);
    const [options] = useState({
        chart: {
            renderTo: 'container',
            type: 'spline',
            marginRight: 10
        },

        title: {
            // {dates.startDate} - {dates.endDate}
            text: '⍤⃝[' + dates.startDate + '] ~ [' + dates.endDate + '] press Data',
            //  스타일
            align: "center",
            y: 20,
            x: 0,
            style: {
                fontSize: "28px",
                color: (Highcharts.theme && Highcharts.theme.textColor) || "black"
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: "#666666"
                },
                x: 0
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Dot',
            tickWidth: 0,
        },
        yAxis: {
            title: {
                text: "press<br />punch<br />(lot)",
                align: "high",
                rotation: 0,
                x: 180,
                y: -30,
                useHTML: true,
                style: {
                    align: "center",
                    fontWeight: "bold"
                }
            },
            labels: {
                formatter: function () {
                    return this.value + ' lot';     // y축 단위
                }
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Dot',
            width: 0

        },
        plotOptions: {
            series: {
                turboThreshold: 0 // Comment out this code to display error
            }
        },

        series: []
    });

    const [press] = useState([
        { name: "PR14", value: "1" },
        { name: "PR16", value: "2" },
        { name: "PR19", value: "3" },
        { name: "PR33", value: "4" },
        { name: "PR20", value: "5" },
        { name: "PR23", value: "6" },
        { name: "PR34", value: "7" },
        { name: "PR35", value: "8" },
        { name: "PR36", value: "9" },
        { name: "PR37", value: "10" },
        { name: "PR38", value: "11" },
        { name: "PR39", value: "12" },
        { name: "PR40", value: "13" },
        { name: "PR41", value: "14" },
        { name: "PR43", value: "15" }
    ]);
    async function insertItem() {
        try {
            const response = await axios.post("/api/history", {
                startDate: dates.startDate,
                endDate: dates.endDate
            });
            let responseOK = response && response.status === 200 && response.statusText === 'OK';
            if (responseOK) {
                let data = await response.data; //  받은 데이터
                let fetchData = data.data;  //  받은 데이터의 받은 거
                console.log(fetchData.length);
                let minute = parseInt(fetchData.length / 863996) * 300; //  몇분마다 ? 5분인데, 날이 많을수록 더 폭이 넓어지게
                console.log(minute);
                var i = 0;
                for (var row = 1; i < fetchData.length && row <= 15; row++) {
                    chartComponent.current.chart.addSeries({
                        name: press[row].name,
                        data: (function () {
                            var push_data = [];
                            for (; i < fetchData.length && fetchData[i].id == row; i += minute) {
                                push_data.push([
                                    fetchData[i].y
                                ]);
                            }
                            return push_data;
                        })()
                    });
                }
            }

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {

        console.log(chartComponent.current.chart.series.length);
        while (chartComponent.current.chart.series.length) {
            chartComponent.current.chart.series[0].remove();
        }
        chartComponent.current.chart.setTitle({ text: '⍤⃝[' + dates.startDate + '] ~ [' + dates.endDate + '] press Data' });
        chartComponent.current.chart.redraw();
        insertItem();
    }, [dates]);
    return (
        <div>
            <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={options} />

        </div>

    )
}

export default HistoryGraph