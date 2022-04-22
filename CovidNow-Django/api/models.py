from django.db import models

# Create your models here.
class Country(models.Model):
    Name = models.CharField(max_length=60)
    Code = models.CharField(max_length=4)

    def __str__(self):
        return self.name + " (" + self.code + ")"