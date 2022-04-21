/**
 * 2022.04.17
 * 임한나
 * - 순서 정렬안되는거 고쳤음
 * 
 */
import React, { useState, useEffect, useRef } from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';

const Tag = ({ selected, openTime, selectCheck, setSelectCheck, selectoptions }) => {
    const savedCallback = useRef();
    const chartComponent = useRef(null);
    const [data1, setData1] = useState([]);
    const [dataIndex, setData1Index] = useState(0);
    const RoutineTime = 10; //  10분 간격
    const [dataChange, setDataChange] = useState([]);
    const [selectedChange, setSelectedChange] = useState(false);
    const [options] = useState({
        chart: {
            renderTo: 'container',
            type: 'spline',
            marginRight: 10,
            animation: Highcharts.svg
        },

        title: {
            text: 'Real-time tag trend lookup',
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
            tickPixelInterval: 10,
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: "왼쪽<br />punch",
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
            gridLineWidth: 1,
            gridLineDashStyle: 'Dot'
        },
        legend: {
            enabled: false
        },
    
        exporting: {
            enabled: false
        },
        accessibility: {
            announceNewData: {
              enabled: true,
              minAnnounceInterval: 15000,
              announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                  return 'New point added. Value: ' + newPoint.y;
                }
                return false;
              }
            }
          },

        series: []
    });

    //  통신
    async function getitem(startRow, now) {

        try {
            if (selected.length != 0) {
                for (let i = 0; i < selected.length; i++) {
                    selected[i].startRow = startRow;
                }
                const response = await fetch(`/api/Tag`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(selected)
                });
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const json = await response.json();

                if (json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }
                console.log(json.data);
                setData1(json.data);

            }
        } catch (err) {
            console.log(err);
        }
    }


    function time() {
        console.log("**********time**********")
        var now = new Date();
        var sec = parseInt(now - openTime) / 1000;
        var day = parseInt(sec / 60 / 60 / 24);

        sec = (sec - (day * 60 * 60 * 24));
        var hour = parseInt(sec / 60 / 60);

        sec = (sec - (hour * 60 * 60));
        var min = parseInt(sec / 60);

        sec = parseInt(sec - (min * 60));
        // console.log(min + "분 " + sec + "초 ");
        console.log(selected);

        if (data1.length != 0) {
            setDataChange(data1);
            if (data1 !== dataChange && data1.length / 600 <= selected.length) {
                var time = (new Date()).getTime(), itemIndex;

                for (itemIndex = 0; itemIndex < selected.length; itemIndex++) {
                    // for (itemIndex = dataChange.length / 600; itemIndex < selected.length; itemIndex++) {
                    var changestatus = true;
                    for (let j = 0; j < chartComponent.current.chart.series.length; j++) {
                        if (selected[j].label == selected[itemIndex].label) {
                            changestatus = false;
                            break;
                        }
                    }
                    if (changestatus) {
                        console.log("first");
                        var index_row = 0;
                        for (var row1 = 0; row1 < selectoptions.length; row1++) {
                            for (var row2 = 0; row2 < selected.length; row2++) {
                                console.log(selectoptions[row1].label + " " + selected[row2].label);
                                if (selectoptions[row1].label == selected[row2].label) {
                                    console.log(index_row);
                                    selected[row2].row = index_row++;
                                    break;
                                }
                            }
                        }
                        console.log(selected);

                        const splitData = [];
                        for (var i = -19; i <= 0; i++) {
                            splitData.push({
                                x: time + i * 1000,
                                y: data1[(i + (selected[itemIndex].row * 600) + 29)].pressLogPunch
                            });
                        }
                        chartComponent.current.chart.addSeries({
                            name: selected[itemIndex].label,
                            data: splitData
                        });
                    } else {  //  삭제했을 때, 

                        var index_row = 0;
                        for (var row1 = 0; row1 < selectoptions.length; row1++) {
                            for (var row2 = 0; row2 < selected.length; row2++) {
                                console.log(selectoptions[row1].label + " " + selected[row2].label);
                                if (selectoptions[row1].label == selected[row2].label) {
                                    console.log(index_row);
                                    selected[row2].row = index_row++;
                                    break;
                                }
                            }
                        }
                        console.log(selected);
                    }
                }
                setSelectedChange(true);    //  바꿨을 때 멈추기
                setData1Index(dataIndex + 30);
            }
            else {
                if (chartComponent.current) {
                    if (!selectCheck /*&& selectedChange*/) {
                        for (itemIndex = 0; itemIndex < chartComponent.current.chart.series.length; itemIndex++) {
                            for (var i = 0; i < selected.length; i++) {
                                if (chartComponent.current.chart.series[itemIndex].name === selected[i].label) {
                                    var time = (new Date()).getTime();
                                    chartComponent.current.chart.series[itemIndex].addPoint(
                                        [time + (dataIndex - 30) * 1000, data1[dataIndex + (selected[i].row * 600)].pressLogPunch],
                                        true
                                    );
                                    break;
                                }
                            }

                        }
                    }
                    setData1Index(dataIndex + 1);
                }
            }
        }
        if (((min % RoutineTime) == 0 && sec == 0) || selectCheck) {
            setSelectedChange(false);
            selectCheck ? setSelectCheck(false) : null;
            console.log("******" + min + "분 " + sec + "초 ");
            getitem(parseInt(min / RoutineTime), now);
        }

    }

    useEffect(() => {
        savedCallback.current = time;
    }, [getitem]);
    useEffect(() => {
        function getValue() {
            savedCallback.current();
        }
        let id = setInterval(getValue, 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={options} />
    )
}

export default Tag