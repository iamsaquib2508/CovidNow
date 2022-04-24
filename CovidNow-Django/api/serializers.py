from rest_framework import serializers
from .models import Country, Info

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'Name')

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ('id', 'Confirmed', 'Death', 'Recovered', 'Country', 'Date')