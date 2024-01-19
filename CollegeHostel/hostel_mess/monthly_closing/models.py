from django.db import models
from django import forms


class Product(models.Model):
    LITRE = 'L'
    MILLILITER = 'mL'
    KILOGRAM = 'kg'
    GRAM = 'g'
    NOS = 'nos'

    UNIT_CHOICES = [
        (LITRE, 'Litre'),
        (MILLILITER, 'Milliliter'),
        (KILOGRAM, 'Kilogram'),
        (GRAM, 'Gram'),
        (NOS, 'Nos'),
    ]

    productNo = models.AutoField(primary_key=True)
    productName = models.CharField(max_length=255)
    productUnit = models.CharField(max_length=3, choices=UNIT_CHOICES)
    productPrice = models.DecimalField(max_digits=10, decimal_places=3)

    def __str__(self):
        return self.productName
