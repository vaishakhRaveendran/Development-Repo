from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['productName', 'productUnit', 'productPrice']
    productUnit = forms.ChoiceField(choices=Product.UNIT_CHOICES, widget=forms.Select(attrs={'class': 'form-control'}))
