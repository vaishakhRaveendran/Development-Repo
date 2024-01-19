
from django.db import models

class Product(models.Model):
    productNo = models.IntegerField()
    productName = models.CharField(max_length=255)
    productUnit = models.CharField(max_length=50)
    productPrice = models.DecimalField(max_digits=10, decimal_places=3)

    def __str__(self):
        return self.productName



