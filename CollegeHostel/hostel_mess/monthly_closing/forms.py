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



##################################################################################################################
class productForm(forms.Form):
    productName = forms.ChoiceField(widget=forms.Select(attrs={'class': 'form-control'}))
    quantity = forms.DecimalField(label='Quantity/Weight')
    unit = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'readonly': True}))
    unit_price = forms.DecimalField(widget=forms.NumberInput(attrs={'class': 'form-control', 'readonly': True}))
    total_price = forms.DecimalField(widget=forms.NumberInput(attrs={'class': 'form-control', 'readonly': True}), required=False)


    def __init__(self, *args, **kwargs):
        super(productForm, self).__init__(*args, **kwargs)
        # Populate the choices for productName field
        self.fields['productName'].choices = Product.objects.values_list('productNo', 'productName')

    def clean(self):
        cleaned_data = super().clean()
        quantity = cleaned_data.get('quantity')
        unit_price = cleaned_data.get('unit_price')

        if quantity and unit_price:
            cleaned_data['total_price'] = quantity * unit_price

        return cleaned_data