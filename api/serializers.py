from rest_framework import serializers
from rest_framework.fields import empty
from tools.models import Tool
from sites.models import Site

class ToolSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Tool
        fields = ('id','name', 'sites', 'type', 'status')



class SiteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Site
        fields = ('__all__')


