from django.urls import path,include
from .views import registration

from . import views

urlpatterns = [
    path("", views.users_list),
    path('', views.index),
    path('registration', views.registration)
]