from rest_framework.generics import ListAPIView, RetrieveAPIView

from tools.models import Tool
from .serializers import ToolSerializer

from sites.models import Site
from .serializers import SiteSerializer


class ToolListView(ListAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer

class ToolDetailView(RetrieveAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer


class SiteListView(ListAPIView):
    queryset = Site.objects.all()
    serializer_class =SiteSerializer

