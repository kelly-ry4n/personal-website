from django.conf.urls import url, include
from django.contrib import admin

from rest_framework import routers
from backend.website import views as website

from django.views.generic import TemplateView

api_router = routers.DefaultRouter()

urlpatterns = [
    url(r'^api/v1/', include(api_router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    url(r'^admin/', admin.site.urls),
    url(r'$', TemplateView.as_view(template_name='website/website.html')),
]
