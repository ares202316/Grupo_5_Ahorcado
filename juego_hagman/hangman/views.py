# hangman/views.py

# hangman/views.py

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Ranking
import json

def index(request):
    return render(request, 'index.html')

def play(request):
    return render(request, 'hangman/play.html')  # Asegúrate de que la plantilla 'play.html' exista

def save_ranking(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        usuario = data.get('usuario')
        palabra = data.get('palabra')
        tiempo = data.get('tiempo')

        ranking = Ranking(usuario=usuario, palabra=palabra, tiempo=tiempo)
        ranking.save()

        return JsonResponse({'status': 'success'}, status=200)
    return JsonResponse({'status': 'error'}, status=400)

def get_rankings(request):
    rankings = Ranking.objects.all().order_by('tiempo')[:10]  # Obtén los top 10 rankings
    ranking_list = [
        {
            "username": ranking.usuario,
            "word": ranking.palabra,
            "time": ranking.tiempo,
        }
        for ranking in rankings
    ]
    return JsonResponse({"rankings": ranking_list})