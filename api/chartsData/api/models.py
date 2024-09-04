from django.db import models

# Create your models here.


class CandlestickData(models.Model):
    date = models.DateField()  # Represents 'x' (date)
    open = models.DecimalField(max_digits=10, decimal_places=2)
    high = models.DecimalField(max_digits=10, decimal_places=2)
    low = models.DecimalField(max_digits=10, decimal_places=2)
    close = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Candlestick Data for {self.date}"


class LineChartData(models.Model):
    label = models.CharField(max_length=20)  # Represents 'labels' ("Jan", "Feb")
    value = models.DecimalField(max_digits=10, decimal_places=2)  # the data points

    def __str__(self):
        return f"Line Chart Data for {self.label}"


class BarChartData(models.Model):
    label = models.CharField(max_length=50)  # Represents 'labels' ("Product A")
    value = models.PositiveIntegerField()  # the 'data' values

    def __str__(self):
        return f"Bar Chart Data for {self.label}"


class PieChartData(models.Model):
    label = models.CharField(max_length=50)  # Represents the 'labels' ("Red", "Blue")
    value = models.PositiveIntegerField()  # Represents 'data' values

    def __str__(self):
        return f"Pie Chart Data for {self.label}"