from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from .views import LoginAPI, LogOutView, SignUpPage

from SecretSanta import settings
from . import views

urlpatterns = [
    path('register/', SignUpPage.as_view(), name='Sign'),
    path("admin/", admin.site.urls),
    path('signup', views.signup),
    path('login', views.login),
    path('test_token', views.test_token),
    path("users/", include("users.urls")),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', LogOutView.as_view(), name='logout')
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
