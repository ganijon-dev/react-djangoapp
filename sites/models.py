from django.db import models

# Create your models here.
class Site(models.Model):
    website = models.CharField(max_length=120)
    tests= models.PositiveIntegerField(verbose_name='Tests', default=0)
    personalizations=models.PositiveIntegerField(verbose_name='Personalizations', default=0)
    hasScript = models.BooleanField(default=False,verbose_name='Script Installed')

    
    def __str__(self):
        return self.website