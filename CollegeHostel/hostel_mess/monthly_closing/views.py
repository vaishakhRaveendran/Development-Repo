from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request,'monthly_closing/home.html')

def create_closing(request):
    return render(request,'monthly_closing/create_closing.html')

def add_products(request):
    return render(request, 'monthly_closing/add_product.html')

def drop_products(request):
    return HttpResponse("Hello, this is your drop product page!")

def modify(request):
    return HttpResponse("Hello, this is your modify page!")
