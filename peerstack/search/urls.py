from django.urls import path
from .views import skill_search

urlpatterns = [
    path("", skill_search, name="skill_search"),
]