import { CandleStick } from "@/types/types";

export const LineChartData = async () => {
    const response = await fetch('http://localhost:8000/api/line-chart-data/');
    const data = await response.json();
    return data
}

export const BarChartData = async () => {
    const response = await fetch('http://localhost:8000/api/bar-chart-data/');
    const data = await response.json();
    return data
}

export const PieChartData = async () => {
    const response = await fetch('http://localhost:8000/api/pie-chart-data/');
    const data = await response.json();
    return data
}

export const CandleStickData = async (): Promise<CandleStick[]> => {
    const response = await fetch('http://localhost:8000/api/candlestick-data/');
    const data = await response.json();
    return data
}

