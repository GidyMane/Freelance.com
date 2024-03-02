from django.urls import path
from .views import EmailViewSet

urlpatterns =[
    path('sendmail/', EmailViewSet.as_view({"post": "send_mail_attachment"}) )
]