from rest_framework import viewsets
from .serializers import CountrySerializer
from .models import Country

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all().order_by('Name')
    serializer_class = CountrySerializer
