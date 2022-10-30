from django.shortcuts import render

# Create your views here.

# Homepage/Indexpage
def index(request):
  return render(request, "index.html")
