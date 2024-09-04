export interface CandleStick {
    id: number;
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
}

export interface BarChartT {
    id: number;
    label: string;
    value: number;
}

export interface LineChartT {
    id: number;
    label: string;
    value: number;
}

export interface PieChartT {
    id: number;
    label: string;
    value: number;
}