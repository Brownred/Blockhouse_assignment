"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { PieChartData } from "@/data/fetch"
import { PieChartT } from "@/types/types"

export const description = "A pie chart with a label"

const chartData = [
  { label: "red", value: 275, fill: "var(--color-red)" },
  { label: "blue", value: 200, fill: "var(--color-blue)" },
  { label: "yellow", value: 187, fill: "var(--color-yellow)" },
  { label: "gree", value: 173, fill: "var(--color-gree)" },
  { label: "purple", value: 90, fill: "var(--color-purple)" },
]


export function PieChartComponent() {
    const chartConfig = {
        value: {
          label: "value",
        },
        red: {
          label: "red",
          color: "hsl(var(--chart-1))",
        },
        blue: {
          label: "blue",
          color: "hsl(var(--chart-2))",
        },
        yellow: {
          label: "yellow",
          color: "hsl(var(--chart-3))",
        },
        green: {
          label: "green",
          color: "hsl(var(--chart-4))",
        },
        purple: {
          label: "Other",
          color: "hsl(var(--chart-5))",
        },
      } satisfies ChartConfig

    const [chartData, setChartData] = useState<PieChartT[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await PieChartData();
      setChartData(data);
    }
    fetchData();
  }, []);

  console.log(chartData);


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Colors</CardTitle>
        <CardDescription>Number of people&rsquo;s Favourite color</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="label" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total number of people&rsquo;s favourite coloe
        </div>
      </CardFooter>
    </Card>
  )
}
