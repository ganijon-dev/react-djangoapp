from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ToolListView, ToolDetailView, SiteListView 


urlpatterns = [
    path('tools', ToolListView.as_view()),
    path('tools/<pk>', ToolDetailView.as_view()),
    path('sites',SiteListView.as_view())

]

