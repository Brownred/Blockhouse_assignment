"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
import { BarChartData } from "@/data/fetch"

export const description = "A bar chart with a label"


const chartConfig = {
  desktop: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartComponent() {

const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await BarChartData();
      setChartData(data);
    }
    fetchData();
  }, []);

  console.log(chartData);

  return (
    <Card className="w-[40%]">
      <CardHeader>
        <CardTitle>Bar Chart - Products</CardTitle>
        <CardDescription>Total Amount</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            barSize={35}
            
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              angle={45}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Sold products this mont
        </div>
      </CardFooter>
    </Card>
  )
}
