"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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
import { LineChartData } from "@/data/fetch"
import { useEffect, useState } from "react"

export const description = "A line chart with a label"


const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
  id: {
    label: "id",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LineChartComponent() {

  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await LineChartData();
      setChartData(data);
    }
    fetchData();
  }, []);

  console.log(chartData);

  return (
    <Card className="w-[40%]">
      <CardHeader>
        <CardTitle>Line Chart - Label</CardTitle>
        <CardDescription>Sold Houses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
        <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="natural"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>

        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Houses sold this year
        </div>
      </CardFooter>
    </Card>
  )
}
