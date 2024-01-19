from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse("Hello, this is your home page!")

def create_closing(request):
    return HttpResponse("Hello, this is your closing page!")

def add_products(request):
    return HttpResponse("Hello, this is your add product page!")

def drop_products(request):
    return HttpResponse("Hello, this is your drop product page!")

def modify(request):
    return HttpResponse("Hello, this is your modify page!")
