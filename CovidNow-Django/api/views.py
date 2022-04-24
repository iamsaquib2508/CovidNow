from rest_framework import viewsets
from .serializers import CountrySerializer, InfoSerializer
from .models import Country, Info
from django.http import HttpResponse, JsonResponse


def InfoList(request):
    if request.method == 'GET':
        infos = Info.objects.all()
        serializer = InfoSerializer(infos, many=True)
        return JsonResponse(serializer.data, safe=False)


def InfoDetail(request, countryId):
    try:
        infos = Info.objects.filter(Country_id = countryId)
    except Info.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = InfoSerializer(infos, many=True)
        return JsonResponse(serializer.data, safe=False)