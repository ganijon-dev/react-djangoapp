# Generated by Django 3.0.5 on 2020-04-19 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0005_auto_20200419_2240'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tool',
            name='status',
            field=models.CharField(choices=[('blocked', 'blocked'), ('enabled', 'enabled'), ('disabled', 'disabled')], default='on', max_length=20),
        ),
    ]
