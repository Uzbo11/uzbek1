from django.urls import path
from .views import register

from . import views

urlpatterns = [
    path("", views.users_list),
    path('register/', register, name='register'),
]