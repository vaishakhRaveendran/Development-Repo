# Generated by Django 4.2.8 on 2024-01-19 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("monthly_closing", "0004_alter_product_productno"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="productUnit",
            field=models.CharField(
                choices=[
                    ("L", "Litre"),
                    ("mL", "Milliliter"),
                    ("kg", "Kilogram"),
                    ("g", "Gram"),
                    ("nos", "Nos"),
                ],
                max_length=3,
            ),
        ),
    ]