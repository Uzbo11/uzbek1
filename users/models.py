from django.db import models
from django.contrib.auth.models import User, AbstractUser

class UserProfile(User):
    student_id = models.CharField(max_length=255)
    gender = models.BooleanField()

from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # добавьте свои дополнительные поля, если необходимо
    pass