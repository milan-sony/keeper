from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from user.models import CustomUser

class CustomUserAdmin(UserAdmin):
    """Define admin model for custom User model with no username field."""
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (('Personal details'), {'fields': ('name',)}),
        (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name', 'email', 'password1', 'password2'),
        }),
    )
    list_display = ('name', 'email', 'is_active')
    search_fields = ('email', 'name')
    ordering = ('email',) # Without the comma, ('email') is the same as 'email', which is a string, not a tuple.
    # https://stackoverflow.com/questions/31765584/django-admin-error-admin-e008-the-value-of-fieldsets-must-be-a-list-or-tuple

admin.site.register(CustomUser, CustomUserAdmin)