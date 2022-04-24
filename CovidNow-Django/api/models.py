from tkinter import CASCADE
from django.db import models
from django.utils import timezone

class Country(models.Model):
    Name = models.CharField(max_length=60)
    Code = models.CharField(max_length=4)

    def __str__(self):
        return self.Name + " (" + self.Code + ")"

class Info(models.Model):
    Confirmed = models.IntegerField()
    Death = models.IntegerField()
    Recovered = models.IntegerField()
    Country = models.ForeignKey(Country, on_delete=models.CASCADE)
    Date = models.DateField(default=timezone.now)