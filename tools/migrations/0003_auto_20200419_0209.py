# Generated by Django 3.0.5 on 2020-04-18 23:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0002_tools_status'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tools',
            new_name='Tool',
        ),
    ]
