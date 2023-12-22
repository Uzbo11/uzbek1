from django.urls import path,include

from . import views

urlpatterns = [
    path("", views.users_list),
    path('', views.index),
]