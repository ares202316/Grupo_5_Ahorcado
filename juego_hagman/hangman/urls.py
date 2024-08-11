# hangman/urls.py

# hangman/urls.py

from django.urls import path
from . import views
from .views import save_ranking
from .views import save_ranking


urlpatterns = [
    path('', views.index, name='index'),
    path('play/', views.play, name='juego'),  # Asegúrate de que el nombre de la URL sea 'juego'
    path('save-ranking/', save_ranking, name='save_ranking'),
    path('get_rankings/', views.get_rankings, name='get_rankings'),
    
]
