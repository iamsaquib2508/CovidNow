from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
    path('infos/', views.InfoList),
    path('infos/<int:countryId>/', views.InfoDetail),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]