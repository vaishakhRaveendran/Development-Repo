# Generated by Django 4.2.8 on 2024-01-19 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("monthly_closing", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="product", name="id",),
        migrations.AlterField(
            model_name="product",
            name="productNo",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
