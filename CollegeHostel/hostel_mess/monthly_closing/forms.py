from django import forms
from .models import Product

class addForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['productName', 'productUnit', 'productPrice']
    productUnit = forms.ChoiceField(choices=Product.UNIT_CHOICES, widget=forms.Select(attrs={'class': 'form-control'}))

class dropForm(forms.Form):
    productId = forms.ChoiceField(widget=forms.Select(attrs={'class': 'form-control'}))
    productId.choices = Product.objects.values_list('productNo', 'productName')