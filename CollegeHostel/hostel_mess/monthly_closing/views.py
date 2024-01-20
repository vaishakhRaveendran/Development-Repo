from django.shortcuts import render,redirect
from django.http import HttpResponse
from .forms import addForm,dropForm
from .models import Product
# Create your views here.
def home(request):
    products = Product.objects.all()
    print(products)
    return render(request, 'monthly_closing/home.html', {'products': products})


def add_products(request):
    if request.method == 'POST':
        form = addForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('monthly_closing-home')
    else:
        form = addForm()

    return render(request, 'monthly_closing/add_product.html', {'form': form})

def create_closing(request):
    return render(request, 'monthly_closing/create_closing.html')


def drop_products(request):
    if request.method == 'POST':
        form = dropForm(request.POST)
        if form.is_valid():
            product_id = form.cleaned_data.get('productId')
            remove_product = Product.objects.get(productNo=product_id)
            remove_product.delete()
            return redirect('monthly_closing-home')
    else:
        form = dropForm()
    return render(request, 'monthly_closing/drop_product.html', {'form': form})


def modify(request):
    return HttpResponse("Hello, this is your modify page!")



def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product_list')  # Replace 'product_list' with your actual URL name
    else:
        form = ProductForm()

    return render(request, 'create_product.html', {'form': form})
