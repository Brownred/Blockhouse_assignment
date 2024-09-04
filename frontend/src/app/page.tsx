import { BarChartComponent } from "@/components/barChart";
import CandleStickComponent from "@/components/candleStick";
import { LineChartComponent } from "@/components/lineChart";
import { PieChartComponent } from "@/components/pieChart";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-center gap-7 p-20">
      
      <LineChartComponent />
      <BarChartComponent />
      <PieChartComponent />
      <CandleStickComponent />
      
    </main>
  );
}
