from django.urls import path
from .views import contact_email

urlpatterns = [
    path('contact/', contact_email, name='contact-email'),
]