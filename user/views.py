from django.shortcuts import render

# Create your views here.

#UserSignup
def signup(request):
  return render(request, "usersignup.html")