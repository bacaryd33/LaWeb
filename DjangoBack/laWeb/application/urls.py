from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index_user'),#display the view for index
    #path('getUser/<str:nom>',views.get_user,name='get_user'),#display the view for get user by his name
    #path('addUser/<str:nom>/<str:prenom>/<str:pseudo>',views.add_user,name='add_user'),#display the view for add an user
    #path('editUser/<int:pk>/<str:nom>',views.edit_nom,name='edit_nom'),#display the view for edit name of user the first parameter is id to reconize the user abd the second is the new name
    path('getAllUser',views.get_all,name='get_all_User'),#display the view for diplay all user
    #path('delUser/<int:pk>',views.del_user,name='del_user'),#display the view for delete an user by his id
]
