from django.urls import path
#Import views inside the urls.py of apps.
from . import views
urlpatterns = [
    path('',views.home,name='monthly_closing-home'),
    path('add_product/',views.add_products,name='monthly_closing-add_product'),
    path('drop_product/',views.drop_products,name='monthly_closing-drop_product'),
    path('create_closing/',views.create_closing,name='monthly_closing-create_closing'),
    path('modify/',views.modify,name='monthly_closing-modify'),
    path('get_product_details/<int:product_id>/',views.get_product_details, name='get_product_details')
]