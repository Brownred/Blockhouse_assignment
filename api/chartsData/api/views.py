from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CandlestickData, LineChartData, BarChartData, PieChartData
from .serializers import CandlestickDataSerializer, LineChartDataSerializer, BarChartDataSerializer, PieChartDataSerializer

@api_view(['GET', 'POST'])  # create and list all candlestick data
def candlestickData(request):
    if request.method == 'GET':   # list all candlestick data
        data = CandlestickData.objects.all()
        serializer = CandlestickDataSerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':   # create a new candlestick data
        serializer = CandlestickDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST']) # create and list all line chart data
def linechartData(request):
    if request.method == 'GET':
        data = LineChartData.objects.all()
        serializer = LineChartDataSerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = LineChartDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST']) # create and list all bar chart data
def barchartData(request):
    if request.method == 'GET':
        data = BarChartData.objects.all()
        serializer = BarChartDataSerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BarChartDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST']) # create and list all pie chart data
def piechartData(request):
    if request.method == 'GET':
        data = PieChartData.objects.all()
        serializer = PieChartDataSerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PieChartDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        