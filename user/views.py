from django.shortcuts import render,redirect
from user.models import CustomUser as user
from django.contrib import messages
from django.contrib.auth.hashers import make_password

# Create your views here.

#UserSignup
def usersignup(request):
  if request.method == 'POST':

    name = request.POST['name']
    email = request.POST['email']
    password = request.POST['password']
    confirmpassword = request.POST['confirmpassword']

    values = {
      'name': name,
      'email': email,
      'password': password,
      'confirmpassword': confirmpassword,
    }

    if(not name):
      messages.warning(request, "Name field is required")
      return render(request, "usersignup.html", values)
    elif(not email):
      messages.warning(request, "Email field is required")
      return render(request, "usersignup.html", values)
    elif(not password):
      messages.warning(request, "password field is required")
      return render(request, "usersignup.html", values)
    elif(not confirmpassword):
      messages.warning(request, "confirmpassword field is required")
      return render(request, "usersignup.html", values)
    elif(password != confirmpassword):
      messages.warning(request, "password fields didn't match")
      return render(request, "usersignup.html", values)
    elif(user.objects.filter(email=email).exists()):
      messages.warning(request, "User with this Email already exist")
      return render(request, "usersignup.html", values)
    else:
      user(name=name, email=email, password=make_password(password)).save() # make_password is used to make the password into hashed/encrypted format
      messages.success(request, "Your account has been successfully created")
      return redirect('userlogin')



    # if password == confirmpassword:
    #   if user.objects.filter(email=email).exists():
    #     messages.warning(request, "User with this Email already exist")
    #     return render(request, "usersignup.html", values)
    #   else:
    #     user(name=name, email=email, password=make_password(password)).save() # make_password is used to make the password into hashed/encrypted format
    #     messages.success(request, "Your account has been successfully created")
    #     return redirect('userlogin')
    # else:
    #   messages.warning(request, "password fields didn't match")
    #   return redirect('usersignup')

  else:
    return render(request, "usersignup.html")