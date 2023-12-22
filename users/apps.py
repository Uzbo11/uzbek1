from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

class myAppNameConfig(AppConfig):
    name = 'myAppName'
    verbose_name = 'A Much Better Name'