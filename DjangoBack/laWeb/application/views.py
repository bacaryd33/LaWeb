####from rest_framework.response import Response
###f###rom rest_framework.views import APIView
##from rest_framework import status
#from rest_framework.decorators import api_view
#from . import serializers

from . import models
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers

#affiche l index
def index (request):
    response = json.dumps([{'info':'WELCOME ON INDEX'}])
    return HttpResponse(response,content_type='application/json')

#recupere un utilisateur
def get_user(request,nom):
    if request.method == 'GET':
        try:
            user = models.Utilisateur.objects.get(nom=nom)
            response = json.dumps([{'nom':user.nom,'prenom':user.prenom,'id':user.pk}])
        except :
            response = json.dumps([{'error':'pas d user avec ce nom'}])
    return HttpResponse(response,content_type='application/json')

#recupere tout les utilisateur
def get_all(request):
    users = serializers.serialize("json", models.Utilisateur.objects.all())
    return HttpResponse(users,content_type="application/json")

#ajoute des utilisateurs
def add_user(request,nom,prenom,pseudo):
        try:
            user = models.User(nom=nom,prenom=prenom,pseudo=pseudo)
            user.save()
            response = json.dumps([{'sucess':'YOU ADD USER '}])
        except:
            response = json.dumps([{'error':'IMPOSSIBLE TO ADD'}])
        return HttpResponse(response,content_type='application/json')

#edit nom
def edit_nom(request,pk,nom):
        try:
            user = models.User.objects.get(pk=pk)
            user.nom = nom
            user.save()
            response = json.dumps([{'sucess':'EDIT SUCCESS'}])
        except:
            response = json.dumps([{'error':'IMPOSSIBLE TO EDIT'}])
        return HttpResponse(response,content_type='application/json')

#supprimer un utilisateur
def del_user(request,pk):
    try:
        user = models.User.objects.get(pk=pk)
        user.delete()
        response = json.dumps([{'sucess':'YOU DELETE SUCCESFULLY '}])
    except:
        response = json.dumps([{'error':'IMPOSSIBLE TO DELETE'}])
    return HttpResponse(response,content_type='application/json')


#Get utilisateur who are in membre table, join by id
#def getMembers(request){
#if resquest.method == 'GET':
#    try:
#        member = models.utilisateur.getAll().filter(models.utilisateur.id_1 = models.membre.id)
#         response = json.dumps([{'nom':user.nom,'prenom':user.prenom, }])
#     except:
#         response = json.dumps([{'error':'pas d user avec ce nom'}])
# return HttpResponse(response,content_type='application/json')

#}






















#http://www.formation-django.fr/framework-django/zoom-sur/orm-django.html
#class ListUserView(APIView):
    #def getAll(self,request):
        #users = models.User.objects.all()
        #serializer = serializers.UserSerializer(users, many=True)

        #return Response(serializer.data)

    #def get(self,request):
        #users = models.User.objects.get(name =request)
        #serializer = serializers.UserSerializer(users, many=True)

        #return Response(serializer.data)
    #def post(self):
        #pass
