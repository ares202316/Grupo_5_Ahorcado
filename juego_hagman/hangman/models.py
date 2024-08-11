from django.db import models


class Ranking(models.Model):
    usuario = models.CharField(max_length=100)
    palabra = models.CharField(max_length=100)
    tiempo = models.FloatField()

    class Meta:
        db_table = 'rankings'