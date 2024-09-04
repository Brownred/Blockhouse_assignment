'use client'

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { CandleStickData } from '@/data/fetch';
import { CandleStick } from '@/types/types';


const CandleStickComponent = () => {

    const [chartData, setChartData] = useState<CandleStick[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await CandleStickData();
      setChartData(data);
    }
    fetchData();
  }, []);

    const data = chartData.map((item) => {
        return {
            x: new Date(item.date),
            y: [
                parseInt(item.open, 10),
                parseInt(item.high, 10),
                parseInt(item.low, 10),
                parseInt(item.close, 10)
              ]
        }
    })

 
    const series = [{
        data: data
      }]

    
      return (
    <Card>
      <CardHeader>
        <CardTitle>Candle Stick - Label</CardTitle>
        <CardDescription>September 2024</CardDescription>
      </CardHeader>
          <div id="chart" className='p-8'>
            <ReactApexChart options={{ plotOptions: {candlestick: {wick: {useFillColor: true}}}, xaxis: {type: 'datetime'}, yaxis: {tooltip: {enabled: true}}, chart: {toolbar: {show: false}, dropShadow: {enabled: true}, fontFamily:'Inter'}, tooltip: {enabled: true, fixed: {enabled: true, position: 'topRight', offsetX: 0, offsetY: 0}}}} series={series} type="candlestick" height={350} />
          </div>
          <div id="html-dist"></div>
          <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total stocks sold this month
        </div>
      </CardFooter>
        </Card>
      );
    };
    
    export default CandleStickComponent;
