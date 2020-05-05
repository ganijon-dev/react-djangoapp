from django.db import models

# Create your models here.
class Tool(models.Model):
    TOOL_CHOICES = [
        ('blocked', 'blocked'),
        ('enabled', 'enabled'),
        ('disabled','disabled'),
    ]
    name = models.CharField(max_length=120)
    sites = models.PositiveIntegerField()
    type = models.CharField(max_length=40)
    status = models.CharField(max_length=20,choices=TOOL_CHOICES,default='on')

    def __str__(self):
        return self.name