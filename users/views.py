from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse

@api_view(['GET'])
def users_list(request):
    users = UserProfile.objects.all()
    serializer = UserProfileSerializer(users, many=True)
    return Response({"users": serializer.data})

def index(request):
    return render(request,'index.html')

def registration(request):
    if request.method == "GET":
        user_form=UserCreationForm(request.POST)
        if user_form.is_valid():
            user_form.save()
            return HttpResponse("<h1>Registration successfully</h1>")
    else:
        user_form=UserCreationForm()
    return render(request,'registration.html',{'user_form':user_form})