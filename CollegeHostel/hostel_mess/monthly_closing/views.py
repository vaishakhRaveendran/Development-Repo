from django.shortcuts import render,redirect,get_object_or_404
from django.http import HttpResponse,JsonResponse
from .forms import addForm,dropForm,productForm
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






####################################################################
def create_closing(request):
    if request.method == 'POST':
        form = productForm(request.POST)
        print(request.POST.get('productUnit'))
        if form.is_valid():
            return redirect('monthly_closing-home')

    else:
        form = productForm()
        return render(request, 'monthly_closing/create_closing.html', {'form': form})




def get_product_details(request,productId):
    if request.method == 'GET':
        product = get_object_or_404(Product, pk=productId)


        data = {
            'name': product.productName,
            'unit': product.productUnit,
            'price': str(product.productPrice),
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method'})