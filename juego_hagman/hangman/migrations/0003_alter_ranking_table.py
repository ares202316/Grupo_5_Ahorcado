# Generated by Django 4.2.15 on 2024-08-08 02:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hangman', '0002_ranking_delete_prueba'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='ranking',
            table='rankings',
        ),
    ]