from rest_framework import serializers
from .models import CandlestickData, LineChartData, BarChartData, PieChartData

class CandlestickDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandlestickData
        fields = '__all__'

class LineChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = LineChartData
        fields = '__all__'

class BarChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarChartData
        fields = '__all__'

class PieChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PieChartData
        fields = '__all__'