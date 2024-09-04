from django.urls import path
from .views import candlestickData, linechartData, barchartData, piechartData

urlpatterns = [
    path('candlestick-data/', candlestickData, name='candlestick-data'),
    path('line-chart-data/', linechartData, name='line-chart-data'),
    path('bar-chart-data/', barchartData, name='bar-chart-data'),
    path('pie-chart-data/', piechartData, name='pie-chart-data'),
]
